import { Header } from "@/components/Header/Header";
import { Space } from "@mantine/core";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Header />
            <Space h="lg" />
            {children}
        </>
    )
}