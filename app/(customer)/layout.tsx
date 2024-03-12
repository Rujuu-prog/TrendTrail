import { Affix, Space } from '@mantine/core';
import { Header } from '@/components/Header/Header';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Affix position={{ top: 0 }} w="100%" zIndex={1000} withinPortal={false}>
        <Header />
      </Affix>
      {/* Headerの高さ分余白を開ける */}
      <Space h="56px" />
      <Space h="lg" />
      {children}
    </>
  );
}
