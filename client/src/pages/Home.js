import React from 'react';

function Home() {
    return (
        <div className="contain"> 
            <div id="cont">
                <h1 className="h-primary">Welcome to the Application!</h1>
            </div>
            <section id="client-services">
                <h1 class="h-secondary">Know More About Us</h1>
                <div class="container">
                    <div class="serv">
                        <h2 class="h-secondary">Contact Us</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, ipsa!.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit in facere necessitatibus.
                        </p>
                    </div>
                    <div class="serv">
                        <h2 class="h-secondary">Address</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, ipsa!
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid ratione in consectetur illo, temporibus ducimus.
                        </p>
                    </div>
                    <div class="serv">
                        <h2 class="h-secondary">More Details</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, ipsa!
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat et quisquam repellendus ipsa accusantium!
                        </p>
                    </div>
                </div>
            </section>
            <footer>
                Copyright &copy; www.Student Regitration Details.com
            </footer>
        </div>

    );
}

export default Home;