"use client";
import React, { useState } from "react";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { lista_proyectos } from "../utils/modelo_proyectos";

export default function SideBar({ navLinks }) {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const [showHamburger, setShowHamburger] = useState(true); // Estado para controlar la visibilidad del botón de hamburguesa
  const [showProjects, setShowProjects] = useState(false);
  const ref = React.useRef(null);

  async function showMenu1(flag, to) {
    let icon1 = document.getElementById("icon1");
    let menu1 = document.getElementById("menu1");

    if (flag) {
      icon1.classList.toggle("rotate-180");
      menu1.classList.toggle("hidden");
    } else {
      await router.push(to);
      setOpen(false);
    }
  }
  async function goto(to) {
    await router.push(to);
    setOpen(false);
  }

  function proyect(to) {
    router.push(to);
    setOpen(false);
  }

  return (
    <>
      <div className="w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex sidebar">
        <div className="fixed left-0 top-0 w-full flex justify-left p-3 bg-gradient-to-b from-gray-900 to-black border-b border-gray-600 sidebar">
          <div className="font-mono font-bold">
            <a
              className="cursor-pointer flex items-center gap-4 p-2 lg:p-0"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => router.push("/")}
            >
              <Image
                src="/img/ucacue-sidebar.png"
                alt="CIITT Logo"
                width={145}
                height={20}
                className={`ml-5 ${
                  open ? "block lg:hidden" : "hidden lg:block"
                }`}
              />
              <Image
                src="/img/RED-SIDEBAR.png"
                alt="CIITT Logo"
                width={48}
                height={48}
                className="ml-2" // Añadir ml-2 para ajustar la posición a la derecha
              />
              <h2 className="text-2xl font-semibold text-red-500">RIOUC</h2>
            </a>
          </div>
        </div>
      </div>
      <button
        className="fixed-hamburger ml-4 right-3 p-5 border-b border-gray-50 sidebar"
        onClick={() => {
          setOpen(true);
          setShowHamburger(false); // Ocultar el botón de hamburguesa al abrir el menú
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 text-red-500 mb-2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </button>

      <div
        className={`${
          !open && "hidden"
        } bg-gray-0/60 min-h-screen w-full fixed top-0 left-0 right-0 backdrop-blur-sm`}
        onClick={() => {
          setOpen(false);
          setShowHamburger(true); // Restablecer la visibilidad del botón de hamburguesa al cerrar el menú
        }}
      ></div>

      <div
        className={`${
          open ? "h-screen" : "h-0"
        } bg-black fixed top-0 left-0 right-0 transition-all duration-500 overflow-hidden fixed-content`}
      >
        <div
          className={`${
            !open && "hidden"
          }  flex flex-col justify-center mx-auto max-w-screen-md h-full`}
        >
          <button
            className="absolute top-8 right-14 focus:outline-none"
            onClick={() => setOpen(false)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
              stroke="currentColor"
              className="w-6 h-6 text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <div className="flex items-center justify-between">
            <h1 className="text-white text-3xl font-bold mb-5">Menú: RIOUC</h1>
            <Image
              src="/img/FINAL_LOGO_BLANCO_ts.png"
              alt="CIITT Logo"
              width={115}
              height={20}
              className="ml-2"
            />
          </div>
          {navLinks.map((link) => {
            const isActive = pathname === link.to;

            return (
              <>
                <div className="flex items-center justify-between">
                  <div class="flex flex-col justify-start items-center px-6 border-b border-gray-800 w-full mt-1">
                    <button
                      key={link.id}
                      onClick={() => showMenu1(link.expanded, link.to)}
                      className={
                        isActive
                          ? "focus:outline-none focus:text-red-600 text-left text-red-500 flex justify-between items-center w-full py-5 space-x-14"
                          : "focus:outline-none focus:text-red-600 text-left text-white flex justify-between items-center w-full py-5 space-x-14"
                      }
                    >
                      <p class="text-sm leading-5 uppercase">{link.name}</p>
                      {link.expanded ? (
                        <svg
                          ref={ref}
                          id="icon1"
                          class="transform rotate-180"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M18 15L12 9L6 15"
                            stroke="currentColor"
                            stroke-width="1.5"
                          />
                        </svg>
                      ) : (
                        <></>
                      )}
                    </button>
                    {link.expanded ? (
                      <div
                        ref={ref}
                        id="menu1"
                        class="flex justify-start flex-col w-full md:w-auto items-start pb-1 hidden"
                      >
                        {/* Agrega la opción "Ver todos los proyectos" */}
                        <button
                          onClick={() => proyect("/proyectos")}
                          className="flex justify-start items-center space-x-6 hover:text-white focus:bg-red-800 focus:text-white hover:bg-red-800 text-gray-400 rounded px-3 py-2 w-full md:w-52"
                        >
                          Ver todos los proyectos
                        </button>
                        {lista_proyectos.map((proyecto) => (
                          <button
                            key={proyecto.id}
                            onClick={() => goto(proyecto.to)}
                            class="flex justify-start items-center space-x-6 hover:text-white focus:bg-red-800 focus:text-white hover:bg-red-800 text-gray-400 rounded px-3 py-2  w-full md:w-52"
                          >
                            <p class="text-base leading-6  ">
                              - {proyecto.name}
                            </p>
                          </button>
                        ))}
                      </div>
                    ) : (
                      <></>
                    )}
                  </div>
                </div>
              </>
            );
          })}
          <div className="flex flex-col md:flex-row bg-black justify-center p-10">
            <a
              href="https://www.facebook.com/universidadcatolicacuenca"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-red-600 p-5"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-facebook"
                viewBox="0 0 16 16"
              >
                <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
              </svg>{" "}
            </a>
            <a
              href="https://twitter.com/UCatolicaCuenca"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-red-600 p-5"
            >
              <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-twitter-x"
            viewBox="0 0 16 16"
          >
            <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
          </svg>
            </a>
            <a
              href="https://www.instagram.com/ucatolicacuenca/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-red-600 p-5"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-instagram"
                viewBox="0 0 16 16"
              >
                <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
              </svg>{" "}
            </a>
            <a
              href="https://www.youtube.com/@UCatolicaCuenca1"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-red-600 p-5"
            >
              <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-youtube"
            viewBox="0 0 16 16"
          >
            <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z" />
          </svg>
            </a>
          </div>
          <div className="absolute bottom-0 w-full">
            <h1 className="font-sans text-center text-white"></h1>
          </div>
        </div>
      </div>
    </>
  );
}
