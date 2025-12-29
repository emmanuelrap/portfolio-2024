import { useEffect, useState, useRef } from "react";
import "./estilo.css";
import CV from "/src/file/CV-CarlosZambrano-Developer.pdf";
import { Avatar, Box, Grid, Stack, Typography } from "@mui/material";
import Carousel from "react-material-ui-carousel";
import { Image } from "@mui/icons-material";

const elements = [
	{
		label: "Java, JS, JSX, TypeScript, Kotlin, C# ",
		value: "INGENIERO",
	},
	{
		label: "HTML5, ReactJS, Vue, NEXT ,Tailwind, SASS, Bootstrap, MUI, PWA-SPA, Redux",
		value: "DESAROLLADOR",
	},
	{
		label: "Node, SQL, NoSQL, MongoDB, SQLServer, PhpMyAdmin",
		value: "INFORMÁTICO",
	},
	{
		label: "Web services, Postman, OpenIA API, Firebase, Auth0, Netlify, Fly.io, Vercel, Gitpages ",
		value: "CONSULTOR",
	},
];

function App() {
	const [menuVisible, setMenuVisible] = useState(false);

	const [isMobile, setIsMobile] = useState(false);
	const [isVisible, setIsVisible] = useState(false);
	const elementRef = useRef(null);

	useEffect(() => {
		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					setIsVisible(true);
					observer.unobserve(entry.target);
				}
			});
		});

		observer.observe(elementRef.current);

		return () => {
			observer.disconnect();
		};
	}, []);

	useEffect(() => {
		const mobileCheck = window.matchMedia("(max-width: 768px)");
		setIsMobile(mobileCheck.matches);

		const handleResize = () => {
			setIsMobile(mobileCheck.matches);
		};

		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	const handleButtonVerCertificado = () => {
		window.open(" https://drive.google.com/file/d/1J3XE9a0rlRPHmtOrrYIWB6tH4qsR3yz7/view?usp=sharing", "_blank");
	};

	//Función que oculta o muestra el menu
	function mostrarOcultarMenu() {
		if (menuVisible) {
			document.getElementById("nav").classList = "";
			setMenuVisible(false);
		} else {
			document.getElementById("nav").classList = "responsive";
			setMenuVisible(true);
		}
	}

	function seleccionar() {
		document.getElementById("nav").classList = "";
		setMenuVisible(false);
	}

	const handleDescargarCV = () => {
		const link = document.createElement("a");
		link.href = CV;
		link.download = "CV-CarlosZambrano-Fullstack.pdf"; // Nombre del archivo descargado
		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);
	};

	const handleDescargarCertificado = () => {
		const link = document.createElement("a");
		link.href = CV;
		link.download = "Certificados-CarlosZambrano.pdf"; // Nombre del archivo descargado
		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);
	};

	//Funcion que aplica las animaciones de las habilidades
	function efectoHabilidades() {
		var skills = document.getElementById("skills");
		var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
		if (distancia_skills >= 300) {
			let habilidades = document.getElementsByClassName("progreso");
			habilidades[0].classList.add("javascript");
			habilidades[1].classList.add("htmlcss");
			habilidades[2].classList.add("photoshop");
			habilidades[3].classList.add("wordpress");
			habilidades[4].classList.add("drupal");
			habilidades[5].classList.add("comunicacion");
			habilidades[6].classList.add("trabajo");
			habilidades[7].classList.add("creatividad");
			habilidades[8].classList.add("dedicacion");
			habilidades[9].classList.add("proyect");
		}
	}

	//detecto el scrolling para aplicar la animacion de la barra de habilidades
	window.onscroll = function () {
		efectoHabilidades();
	};

	return (
		<div>
			<div className='contenedor-header'>
				<header>
					<div className='logo'>
						<a href='#'>ZamDev</a>
					</div>
					<nav id='nav'>
						<ul>
							<li>
								<a href='#inicio' onClick={seleccionar}>
									INICIO
								</a>
							</li>
							<li>
								<a href='#sobremi' onClick={seleccionar}>
									SOBRE MI
								</a>
							</li>
							<li>
								<a href='#skills' onClick={seleccionar}>
									SKILLS
								</a>
							</li>
							<li>
								<a href='#curriculum' onClick={seleccionar}>
									CURRICULUM
								</a>
							</li>
							<li>
								<a href='#portfolio' onClick={seleccionar}>
									PORTFOLIO
								</a>
							</li>
							<li>
								<a href='#contacto' onClick={seleccionar}>
									CONTACTO
								</a>
							</li>
						</ul>
					</nav>
					<div className='nav-responsive' onClick={mostrarOcultarMenu}>
						<i className='fa-solid fa-bars'></i>
					</div>
				</header>
			</div>
			<div
				ref={elementRef}
				style={{
					opacity: isVisible ? 1 : 0,
					transition: "opacity 2.5s ease-in-out",
				}}
			>
				{/* <!-- SECCION INICIO --> */}
				<section id='inicio' className='inicio' style={{ marginTop: "30px" }}>
					<div className='contenido-banner'>
						<div className='contenedor-img' style={{ textAlign: "center" }}>
							<Avatar src='yo5.png' style={{ width: "200px", height: "200px", margin: "auto" }} />
						</div>
						<h1 style={{ marginBottom: "0px" }}>Carlos Zambrano</h1>
						{/* <h2>Ing. en sistemas | Web developer</h2> */}

						<Carousel
							sx={{ width: "100%" }}
							// navButtonsWrapperProps="false"
							// navButtonsProps={false}
							stopAutoPlayOnHover={false}
							autoPlay={true}
							animation='slide'
							duration={2500}
							interval={4000}
							indicators={false}
							navButtonsAlwaysInvisible={true}
							// navButtonsAlwaysVisible={true}
							// next={() => {}}
							// prev={() => {}}
						>
							{elements.map((item) => (
								<Box sx={{ textAlign: "center", mb: { xs: 1, md: 0 } }} id='section0'>
									<Typography
										sx={{
											color: "#1CB698",
											mb: { xs: 1, md: 2 },
											fontSize: { xs: 30, md: 40 },
											fontWeight: "bold",
										}}
									>
										{item.value}
									</Typography>
								</Box>
							))}
						</Carousel>

						<div className='redes'>
							<a href='https://www.facebook.com/EmmanueelZ'>
								<i className='fa-brands fa-facebook-f'></i>
							</a>
							{/* <a href="#">
              <i className="fa-brands fa-twitter"></i>
            </a>
            <a href="#">
              <i className="fa-brands fa-skype"></i>
            </a> */}
							<a href='https://www.linkedin.com/in/carlos-zambra/'>
								<i className='fa-brands fa-linkedin-in'></i>
							</a>
							<a href='https://api.whatsapp.com/send?phone=3113913306' target='_blank' rel='noopener noreferrer'>
								<i className='fab fa-whatsapp' style={{ fontSize: "24px" }}></i>
							</a>
						</div>
					</div>
				</section>

				{/* <!-- SECCION SOBRE MI --> */}
				<section id='sobremi' className='sobremi'>
					<div className='contenido-seccion'>
						<h2 sx={{ textAlign: isMobile && "center" }}>Sobre Mí </h2>
						<p
							style={{
								fontSize: isMobile ? "18px" : "22px",
								marginLeft: isMobile ? "10px" : "100px",
								marginRight: isMobile ? "10px" : "100px",
								textAlign: "justify",
								lineHeight: "1.1",
							}}
						>
							<span>¡Saludos! Soy Carlos Zambrano</span>, un apasionado egresado de la carrera de sistemas del Instituto Tecnológico.{" "}
						</p>
						<p
							style={{
								fontSize: isMobile ? "18px" : "22px",
								marginLeft: isMobile ? "10px" : "100px",
								marginRight: isMobile ? "10px" : "100px",
								textAlign: "justify",
								lineHeight: "1.1",
							}}
						>
							Me considero un entusiasta de la tecnología y un amante de todo lo relacionado con la informática. Con más de <span>3 años de experiencia en el desarrollo Full Stack </span>, estoy
							constantemente explorando y expandiendo mis habilidades en el mundo digital.
						</p>
						<br />
						<div
							className='fila'
							style={{
								fontSize: isMobile ? "18px" : "22px",
								marginLeft: isMobile ? "10px" : "100px",
								marginRight: isMobile ? "10px" : "100px",
							}}
						>
							{/* <!-- datos personales --> */}
							<div className='col'>
								<h3>Datos Personales</h3>
								<ul>
									<li>
										<strong>Edad</strong>
										29 Años
									</li>
									<li>
										<strong>Teléfono</strong>
										(311) 391 3306
									</li>
			{" "}
									<li>
										<strong>Estudios</strong>
										Insituto Tecnológico
									</li>
									<li>
										<strong>Título</strong>
										Ingeniero en Sistemas
									</li>
									<li>
										<strong>Residencia</strong>
										Tepic / Guadalajara.
									</li>
									<li>
										<strong>Cargo</strong>
										Desarrollador Fullstack
									</li>
									<li>
										<strong>Email</strong>
										emmanuelzzz123@gmail.com
									</li>
									<li>Especialidad en Desarrollo ágil de Aplicaciones</li>
								</ul>
							</div>
							{isMobile && <br />}
							{/* <!-- intereses --> */}
							<div className='col' style={{ marginLeft: "30px" }}>
								<h3>¿Qué sé hacer?</h3>
								<div className='contenedor-intereses'>
									<div className='interes'>
										<i className='fas fa-globe'></i>
										<span>WEB APPS</span>
									</div>
									<div className='interes'>
										<i className='fas fa-clipboard-check'></i>
										<span>FORMS</span>
									</div>
									<div className='interes'>
										<i className='fas fa-credit-card'></i>
										<span>PAGOS</span>
									</div>
									<div className='interes'>
										<i className='fas fa-robot'></i>
										<span>CHATBOTS</span>
									</div>
									<div className='interes'>
										<i className='fas fa-plug'></i>
										<span>SOCKETS</span>
									</div>
									<div className='interes'>
										<i className='fas fa-shopping-cart'></i>
										<span>ECOMMERSE</span>
									</div>
									<div className='interes'>
										<i className='fas fa-users-cog'></i>
										<span>ROLES</span>
									</div>
									<div className='interes'>
										<i className='fas fa-mobile-alt'></i>
										<span>RESPONSIVO</span>
									</div>
									<div className='interes'>
										<i className='fas fa-map'></i>
										<span>MAPAS</span>
									</div>
									<div className='interes'>
										<i className='fas fa-cube'></i>
										<span>MODELOS 3D</span>
									</div>
									<div className='interes'>
										<i className='fas fa-comment-dots'></i>
										<span>SMS/WHATS</span>
									</div>
									<div className='interes'>
										<i className='fas fa-robot'></i>
										<span>AUTOMATIZAR</span>
									</div>
								</div>
							</div>
						</div>
						<br />
						<div style={{ display: "flex" }}>
							<button onClick={handleDescargarCV} style={{ marginRight: "0px" }}>
								Descargar CV <i className='fa-solid fa-download'></i>
								<span className='overlay'></span>
							</button>
							<button onClick={handleButtonVerCertificado} style={{ marginLeft: "15px" }}>
								Ver Certificados <i className='fa-solid fa-eye'></i>
								<span className='overlay'></span>
							</button>
						</div>
					</div>
				</section>
				<br />
				{/* <!-- SECCION SKILLS --> */}
				<section className='skills' id='skills'>
					<div className='contenido-seccion'>
						<h2>Habilidades</h2>
						<div className='fila'>
							{/* <!-- Technical Skill --> */}
							<div className='col'>
								<h3>Técnicas </h3>
								<div className='skill'>
									<span>HTML & CSS</span>
									<div className='barra-skill'>
										<div className='progreso'>
											<span>80%</span>
										</div>
									</div>
								</div>
								<div className='skill'>
									<span>Javascript</span>
									<div className='barra-skill'>
										<div className='progreso'>
											<span>80%</span>
										</div>
									</div>
								</div>

								<div className='skill'>
									<span>Reactjs</span>
									<div className='barra-skill'>
										<div className='progreso'>
											<span>90%</span>
										</div>
									</div>
								</div>

								<div className='skill'>
									<span>Vue / Next / Python</span>
									<div className='barra-skill'>
										<div className='progreso'>
											<span>50%</span>
										</div>
									</div>
								</div>
								<div className='skill'>
									<span>SQL/NoSQL</span>
									<div className='barra-skill'>
										<div className='progreso'>
											<span>80%</span>
										</div>
									</div>
								</div>
								<div className='skill'>
									<span>Java / Spring boot</span>
									<div className='barra-skill'>
										<div className='progreso'>
											<span>50%</span>
										</div>
									</div>
								</div>
							</div>
							{/* <!-- Professional Skills --> */}
							<div className='col'>
								<h3>Profesionales</h3>
								<div className='skill'>
									<span>Comunicación</span>
									<div className='barra-skill'>
										<div className='progreso'>
											<span>90%</span>
										</div>
									</div>
								</div>
								<div className='skill'>
									<span>Trabajo en Equipo</span>
									<div className='barra-skill'>
										<div className='progreso'>
											<span>85%</span>
										</div>
									</div>
								</div>
								<div className='skill'>
									<span>Trabajo Remoto</span>
									<div className='barra-skill'>
										<div className='progreso'>
											<span>90%</span>
										</div>
									</div>
								</div>
								<div className='skill'>
									<span>Dedicación</span>
									<div className='barra-skill'>
										<div className='progreso'>
											<span>90%</span>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				<br />
				{/* <!-- SECCION CURRICULUM --> */}
				<section id='curriculum' className='curriculum'>
					<div className='contenido-seccion'>
						<h2>Experiencia</h2>
						<div
							className='fila'
							style={{
								marginLeft: !isMobile && "10px",
								marginRight: !isMobile && "10px",
							}}
						>
							<div className='col izquierda'>
								<h3>Educación</h3>
								<div className='item izq'>
									<h4>Especialidad en Desarrollo Ágil</h4>
									<span className='casa'>Instituto Tecnológico de Tepic</span>
									<span className='fecha'>2022 - 2023</span>
									<div>
										<p>Curso de materias para el desarrollo ágil de aplicaciones web/móviles:</p>
										<ul style={{ marginLeft: "40px" }}>
											<li>Gestión de Proyectos </li>
											<li>Desarrollo Móvil</li>
											<li>Aplicaciones Híbridas</li>
											<li>Programación Web</li>
											<li>Inteligencia Artificial</li>
											<li>Programación Lógica y Funcional</li>
											<li>Graficación</li>
											<li>Autómatas</li>
										</ul>
									</div>
									<div className='conectori'>
										<div className='circuloi'></div>
									</div>
								</div>
								<div className='item izq'>
									<h4>Ingeniería en Sistemas Computacionales</h4>
									<span className='casa'>Instituto Tecnológico de Tepic</span>
									<span className='fecha'>2018 - 2023</span>
									<p>Ingeniería a nivel licenciatura en la carrera de Sistemas Computacionales con especialidad en desarrollo ágil de aplicaciones</p>
									<div className='conectori'>
										<div className='circuloi'></div>
									</div>
								</div>
								<div className='item izq'>
									<h4>Profesional Técnico Bachiller</h4>
									<span className='casa'>Colegio Nacional de Educacion Profesional Técnica</span>
									<span className='fecha'>2012 - 2016</span>
									<p>Estudio de la carrera de informarica a nivel bachilleraro (educación media superior) en el instituto CONALEP de Tepic.</p>
									<div className='conectori'>
										<div className='circuloi'></div>
									</div>
								</div>
							</div>

							<div className='col derecha'>
								<h3>Experiencia de trabajo</h3>
								<div className='item der'>
									<h4>Garmon Solutions</h4>
									<span className='casa'>Fullstack Developer</span>
									<span className='fecha'>2024</span>
									<p>Encargado de crear y desarrollar proyectos para nuestros clientes, desde landin pages y tiendas online hasta aplicaciones con un propósito específico.</p>
									<Box sx={{ ml: 5 }}>
										<ul>
											<li>Análisis de Requisitos</li>

											<li>Diseño de soluciones</li>

											<li>Desarrollo de software</li>
											<li>Pruebas y depuración</li>
											<li>Despliegue Online</li>
											<li>Mantenimiento</li>
											<li>Respaldo de Información</li>
										</ul>
									</Box>
									<div className='conectord'>
										<div className='circulod'></div>
									</div>
								</div>
								<div className='item der'>
									<h4>Coca-Cola Company</h4>
									<span className='casa'>Fullstack Developer</span>
									<span className='fecha'>2023</span>
									<p>
										Desarrollé una Aplicación Web desde cero para optimizar y agilizar el proceso de contratos físicos y entrega de enfriadores, transformándolo en un flujo de trabajo completamente
										digital.
									</p>
									<Box sx={{ ml: 5 }}>
										<ul>
											<li>Desarrollo de chatbots con la API de OpenAI</li>

											<li>Manejo de (PDFs, videos, imágenes).</li>

											<li>Cifrado de datos pa</li>
											<li>Diseñar y construir componentes y servicios reutilizables</li>
											<li>Administracion de Base de datos</li>
										</ul>
									</Box>
									<div className='conectord'>
										<div className='circulod'></div>
									</div>
								</div>
								<div className='item der'>
									<h4>Web Solutions Tepic</h4>
									<span className='casa'>Web Developer</span>
									<span className='fecha'>2022</span>
									<p>Diseño, desarrollo y mantenimiento de aplicaciones web</p>
									<Box sx={{ ml: 5 }}>
										<ul>
											<li>Diseño de módulos interactivos utilizando Figma</li>
											<li>Diseño, creación y alojamiento de la base de datos</li>
											<li>Desarrollo web con HTML, CSS, React, JS, Node</li>
											<li> Encriptación, microservicios, etc.</li>

											<li>Apoyo y mantenimiento de los servicios web</li>
										</ul>
									</Box>

									<div className='conectord'>
										<div className='circulod'></div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				<br />
				{/* <!-- SECCION PORTFOLIO --> */}
				<section id='portfolio' className='portfolio'>
					<div className='contenido-seccion'>
						<h2>PORTFOLIO</h2>

						<div className='galeria'>
							<div className='proyecto'>
								<img src='/images/Animazing1.PNG' alt='' style={{ width: "330px", height: "250px" }} />
								<div className='overlay'>
									<a href='https://animazing-vaweei.netlify.app' target='_blank'>
										<h3>Animazing</h3>
										<br />
										<p>Aplicación Web Real para mi Proyecto personal de venta de Figuras de Anime</p>
									</a>
								</div>
							</div>
							<div className='proyecto'>
								<img src='/images/Zam-App3D.PNG' alt='' style={{ width: "330px", height: "250px" }} />
								<div className='overlay'>
									<a href='https://zam-3d.netlify.app' target='_blank'>
										<h3>ZAM 3D</h3>
										<br />
										<p>Proyecto de prueba para el uso de Renders 3D</p>
									</a>
								</div>
							</div>

							<div className='proyecto'>
								<img src='/ptio.png' alt='' style={{ width: "330px", height: "250px" }} />
								<div className='overlay'>
									<a href='https://eltiobarbershop.com' target='_blank'>
										<h3>El tío Barbershop</h3>
										<br />
										<p>Aplicación web para la franquicia de "El tío Barbershop CDMX"</p>
									</a>
								</div>
							</div>
							<div className='proyecto'>
								<img src='/p0.png' alt='' style={{ width: "330px", height: "250px" }} />
								<div className='overlay'>
									<a href='https://www.garmon.com.mx' target='_blank'>
										<h3>Garmon Solutions</h3>
										<br />
										<p>LandingPage interacvtiva y dinámica para la empresa Garmon-Solutions</p>
									</a>
								</div>
							</div>

							<div className='proyecto'>
								<img src='/pjusticia.png' alt='' style={{ width: "330px", height: "250px" }} />
								<div className='overlay'>
									<a href='https://justiciaypaz.mx' target='_blank'>
										<h3>Justicia y Paz</h3>
										<br />
										<p>Web para el partido político "Justicia y Paz" donde se lleva el registro de INEs</p>
									</a>
								</div>
							</div>
							<div className='proyecto'>
								<img src='/p1.png' alt='' style={{ width: "330px", height: "250px" }} />
								<div className='overlay'>
									<a href='https://zam-ecommerce-demo.netlify.app' target='_blank'>
										<h3>ECOMMERSE</h3>
										<br />
										<p>Aplicación web real con administración, pagos y seguimientos integrados</p>
									</a>
								</div>
							</div>
							<div className='proyecto'>
								<img src='/p2.png' alt='' style={{ width: "330px", height: "250px" }} />
								<div className='overlay'>
									<a href='https://zam-gamerol-opeina.netlify.app' target='_blank'>
										<h3>JUEGO DE ROL</h3>
										<br />
										<p>App realizada completamente con UI material para realizar un juego de Rol con ChatGPT</p>
									</a>
								</div>
							</div>
							
							<div className='proyecto'>
								<img src='/p4.png' alt='' style={{ width: "330px", height: "250px" }} />
								<div className='overlay'>
									<a href='https://chatzam.netlify.app' target='_blank'>
										<h3>CHAT GRUPAL</h3>
										<br />
										<p>PWA realizada para crear un chat grupal de personajes ficticios</p>
									</a>
								</div>
							</div>
							<div className='proyecto'>
								<img src='/p5.png' alt='' style={{ width: "330px", height: "250px" }} />
								<div className='overlay'>
									<a href='https://pokedex-zam.netlify.app' target='_blank'>
										<h3>POKEMON API</h3>
										<br />
										<p>App web de pokemon que consulta la Api</p>
									</a>
								</div>
							</div>
						</div>
					</div>
				</section>
				{/* AQUI BORRE TODO */}
				<br />
				<section id='contacto' className='contacto'>
					<div className='contenido-seccion'>
						<h2>CONTACTO</h2>
						<div className='fila'>
							{/* <!-- Formulario --> */}
							<div className='col'>
								<input type='text' placeholder='Tu nombre' />
								<input type='text' placeholder='Número telefónico' />
								<input type='text' placeholder='E-mail' />

								<textarea name='' id='' cols='30' rows='8' placeholder='Mensaje...'></textarea>
								<button>
									Enviar Mensaje <i className='fa-solid fa-paper-plane'></i>
									<span className='overlay'></span>
								</button>
							</div>

							{/* <!-- Mapa --> */}
							{!isMobile && (
								<div className='col'>
									{/* <img src="/ubicacion.png" alt="" /> */}
									<div className='info' style={{ width: "400px" }}>
										<ul>
											<li>
												<i className='fa-solid fa-location-dot'></i>
												Tepic, Nay. | Guadalajara, Jal.
											</li>
											<li>
												<i className='fa-solid fa-mobile-screen'></i>
												(311) 391 3306
											</li>
											<li>
												<i className='fa-solid fa-envelope'></i>
												emmanuelzzz123@gmail.com
											</li>
										</ul>
									</div>
								</div>
							)}
						</div>
					</div>
				</section>
				<br />
				{/* <!-- footer --> */}
				<footer>
					<a href='#inicio' className='arriba'>
						<i className='fa-solid fa-angles-up'></i>
					</a>
					<div className='redes'>
						<a href='https://www.facebook.com/EmmanueelZ'>
							<i className='fa-brands fa-facebook-f'></i>
						</a>
						{/* <a href="#">
              <i className="fa-brands fa-twitter"></i>
            </a>
            <a href="#">
              <i className="fa-brands fa-skype"></i>
            </a> */}
						<a href='https://www.linkedin.com/in/carlos-zambra/'>
							<i className='fa-brands fa-linkedin-in'></i>
						</a>
						<a href='https://api.whatsapp.com/send?phone=3113913306' target='_blank' rel='noopener noreferrer'>
							<i className='fab fa-whatsapp' style={{ fontSize: "24px" }}></i>
						</a>
						<h3>Carlos Zambrano - 2024</h3>
					</div>
				</footer>
			</div>
		</div>
	);
}

export default App;
