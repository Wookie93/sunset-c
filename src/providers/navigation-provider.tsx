'use client'

import { usePathname } from 'next/navigation';
import {
	type PropsWithChildren,
	createContext,
	useContext,
	useEffect,
	useState,
	type SetStateAction,
} from "react";

const NavigationContext = createContext({
	isOpen: false,
	setIsOpen: (_value: SetStateAction<boolean>) => {},
});

export const NavigationProvider = ({
	children,
}: {
	children: PropsWithChildren["children"];
}) => {
	const [isOpen, setIsOpen] = useState(false);
	const pathname = usePathname();

	useEffect(() => {
		setTimeout(() => {
			setIsOpen(false);
		}, 300);
	}, [pathname]);

	return (
		<NavigationContext.Provider value={{ isOpen, setIsOpen }}>
			{children}
		</NavigationContext.Provider>
	);
};

export const useNavigationContext = () => useContext(NavigationContext);
