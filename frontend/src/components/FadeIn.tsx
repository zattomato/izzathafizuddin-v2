import { useEffect, useState, ReactNode } from "react";

interface FadeInProps {
    children: ReactNode;
    delay?: number;
    transitionDuration?: number;
}

const FadeIn = ({ children, delay = 0, transitionDuration = 400 }: FadeInProps) => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setVisible(true), delay);
        return () => clearTimeout(timer);
    }, [delay]);

    return (
        <div style={{
            opacity: visible ? 1 : 0,
            transition: `opacity ${transitionDuration}ms ease-in`,
        }}>
            {children}
        </div>
    );
};

export default FadeIn;
