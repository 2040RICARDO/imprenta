<!doctype html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <meta name="description" content="">
    <meta name="author" content="">

    <title>Imprenta Unsxx</title>
    <link rel="stylesheet" href="{{asset('assets/panel/css/bootstrap.min.css')}}">
    <link rel="stylesheet" href="{{asset('assets/panel/css/bootstrap-icons.css')}}">
    <link rel="stylesheet" href="{{asset('assets/panel/css/templatemo-kind-heart-charity.css')}}">


</head>

<body id="section_1">

  

    <nav class="navbar navbar-expand-lg bg-light shadow-lg">
        <div class="container">
            <a class="navbar-brand" href="#">
                <img src="{{asset('assets/image/logo.png')}}" class="logo img-fluid" alt="KSAAS">
            </a>

            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item">
                        <a class="nav-link click-scroll" href="#top">Home</a>
                    </li>

                    <li class="nav-item">
                        <a class="nav-link click-scroll" href="#section_2">Nosotros</a>
                    </li>

                    <li class="nav-item">
                        
                        <a class="nav-link click-scroll" href="#section_3">Contactos</a>
                    </li>

      


                    <li class="nav-item ms-3">

                        @if (Route::has('login'))
                            @auth
                                <a class="nav-link custom-btn custom-border-btn btn" href="{{route('dashboard')}}">Home</a>
                            @else
                                <a class="nav-link custom-btn custom-border-btn btn" href="{{ route('login') }}">Ingresar</a>
                            @endauth
                        @endif

                    </li>
                </ul>
            </div>
        </div>
    </nav>

    <main>

        <section class="hero-section hero-section-full-height">
            <div class="container-fluid">
                <div class="row">

                    <div class="col-lg-12 col-12 p-0">
                        <div id="hero-slide" class="carousel carousel-fade slide" data-bs-ride="carousel">
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <img src="{{asset('assets/image/1.png')}}"
                                        class="carousel-image img-fluid" alt="...">

                                    <div class="carousel-caption d-flex flex-column justify-content-end">
                                        <h1>IMP UNSXX</h1>

                                        <p>Imprenta Universidad Nasional Siglo "XX"</p>
                                    </div>
                                </div>

                               
                            </div>

                           
                        </div>
                    </div>

                </div>
            </div>
        </section>


     

        <section class="section-padding section-bg" id="section_2">
            <div class="container">
                <div class="row">

                    <div class="col-lg-6 col-12 mb-5 mb-lg-0">
                        <img src="{{asset('assets/image/3.png')}}"
                            class="custom-text-box-image img-fluid" alt="">
                    </div>

                    <div class="col-lg-6 col-12">
                        <div class="custom-text-box">
                            <h2 class="mb-2">Mision</h2>


                            <p class="mb-0">Proveer servicios de impresión y reproducción de alta calidad a la comunidad universitaria, apoyando el proceso educativo y promoviendo la difusión del conocimiento. Nos comprometemos a ofrecer soluciones eficientes, innovadoras y accesibles que satisfagan las necesidades de nuestros usuarios.</p>
                        </div>
                        <div class="custom-text-box">
                            <h2 class="mb-2">Vision</h2>

     

                            <p class="mb-0">Convertirnos en la imprenta de referencia dentro del entorno universitario, reconocida por la excelencia en nuestros servicios, la rapidez en la entrega, la atención personalizada y la integración de tecnologías avanzadas. Aspiramos a ser un aliado clave en la difusión de la investigación, la cultura y el aprendizaje dentro y fuera de la universidad.</p>
                        </div>

                      
                    </div>

                </div>
            </div>
        </section>


   
    
 

        <section class="testimonial-section section-padding section-bg">
            <div class="container">
                <div class="row">

                    <div class="col-lg-8 col-12 mx-auto">
                        <h2 class="mb-lg-3">Objetivo</h2>

                        <div id="testimonial-carousel" class="carousel carousel-fade slide" data-bs-ride="carousel">

                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <div class="carousel-caption">
                                        <h4 class="carousel-title">Facilitar la producción y distribución de materiales impresos de alta calidad para la comunidad universitaria, apoyando la enseñanza, la investigación y la divulgación académica. Nos esforzamos por ofrecer servicios eficientes y accesibles que contribuyan al éxito académico y profesional de estudiantes, profesores e investigadores.</h4>

                                      
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>


    </main>

    <footer class="site-footer" id="section_3">
        <div class="container">
            <div class="row">
            

                <div class="col-lg-6 col-md-6 col-12 mb-4">
              

                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13601.595254384496!2d-66.5897867!3d-18.4237854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x93fce193ec7e989d%3A0x654dc15ddcd9dec5!2sImprenta%20U.N.S.XX!5e1!3m2!1ses-419!2sbo!4v1716660024210!5m2!1ses-419!2sbo" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>

                <div class="col-lg-4 col-md-6 col-12 mx-auto">
                    <h5 class="site-footer-title mb-3">Contactos e informacion</h5>

                    <p class="text-white d-flex mb-2">
                        <i class="bi-telephone me-2"></i>

                        <a href="#" class="site-footer-link">
                            75568956
                        </a>
                    </p>

                    <p class="text-white d-flex">
                        <i class="bi-envelope me-2"></i>

                        <a href="#" class="site-footer-link">
                            unsxx@gmail.com
                        </a>
                    </p>

                    <p class="text-white d-flex mt-3">
                        <i class="bi-geo-alt me-2"></i>
                        Siglo XX Camp.2B
                    </p>
                </div>
            </div>
        </div>

    </footer>


    <script type="application/json" src="{{asset('assets/panel/js/jquery.min.js')}}"></script>
    <script type="application/json" src="{{asset('assets/panel/js/bootstrap.min.js')}}"></script>
    <script type="application/json" src="{{asset('assets/panel/js/jquery.sticky.js')}}"></script>
    <script type="application/json" src="{{asset('assets/panel/js/click-scroll.js')}}"></script>
    <script type="application/json" src="{{asset('assets/panel/js/counter.js')}}"></script>
    <script type="application/json" src="{{asset('assets/panel/js/custom.js')}}"></script>
  


</body>

</html>