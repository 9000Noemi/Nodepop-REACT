import type { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';
import './Layout.css';

//ReactNode es un tipo que representa cualquier contenido que se puede renderizar en React

interface Props {
  children: ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <div className="layout">
      <Header />
      <main className="layout-main">{children}</main>
      <Footer />
    </div>
  );
}
