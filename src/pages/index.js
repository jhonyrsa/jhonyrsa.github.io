import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

export default function Home() {
  return (
    <Layout title="Home" description="Portfólio Jhony Almeida">
      
      <header className="hero-home">
        <div className="hero-grid">
          
          {/* IMAGEM */}
          <div className="hero-left">
            <img
              src="/img/jhony.jpg"  // ✅ NOME CORRETO
              alt="Jhony Almeida"
              className="hero-image"
            />
          </div>

          {/* TEXTO */}
          <div className="hero-right">
            <p className="hero-topline">Olá, eu sou</p>

            <h1 className="hero-name">
              Jhony Almeida
            </h1>

            <p className="hero-role">
              Engenharia Elétrica + Desenvolvedor
            </p>

            <p className="hero-description">
              Construindo soluções com foco em tecnologia, energia e software.
            </p>

            <div className="hero-links">
              <Link
                className="button button--primary"
                to="https://github.com/jhonyrsa"
              >
                GitHub
              </Link>

              <Link
                className="button button--secondary"
                to="https://www.linkedin.com/in/jhonyrsa/"
              >
                LinkedIn
              </Link>
            </div>
          </div>
        </div>

        {/* 🌊 WAVE */}
        <div className="hero-wave">
          <svg viewBox="0 0 1440 120" preserveAspectRatio="none">
            <path
              d="M0,40 C240,120 480,0 720,40 C960,80 1200,120 1440,40 L1440,120 L0,120 Z"
              fill="var(--ifm-background-color)"
            />
          </svg>
        </div>

      </header>

    </Layout>
  );
}