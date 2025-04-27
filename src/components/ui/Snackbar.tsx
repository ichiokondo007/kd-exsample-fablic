import { createContext, useContext, useState, ReactNode, useEffect } from 'react';

type SnackbarContextType = {
    showMessage: (message: string, duration?: number) => void;
};

const SnackbarContext = createContext<SnackbarContextType>({
    showMessage: () => { },
});

export const useSnackbar = () => useContext(SnackbarContext);

export const SnackbarProvider = ({ children }: { children: ReactNode }) => {
    const [message, setMessage] = useState<string | null>(null);
    const [isVisible, setIsVisible] = useState(false);
    const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null);

    const showMessage = (msg: string, duration = 3000) => {
        if (timeoutId) clearTimeout(timeoutId);
        setMessage(msg);
        setIsVisible(true);
        const id = setTimeout(() => {
            setIsVisible(false);
        }, duration);
        setTimeoutId(id);
    };

    useEffect(() => {
        if (!isVisible) {
            const cleanup = setTimeout(() => setMessage(null), 300);
            return () => clearTimeout(cleanup);
        }
    }, [isVisible]);

    return (
        <SnackbarContext.Provider value={{ showMessage }}>
            {children}
            {message && (
                <div
                    className={`fixed top-24 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-4 py-2 rounded shadow-md transition-opacity duration-300 z-50 ${isVisible ? 'opacity-100' : 'opacity-0'
                        }`}
                >
                    {message}
                </div>
            )}
        </SnackbarContext.Provider>
    );
}