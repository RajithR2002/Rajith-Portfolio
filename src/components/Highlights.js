import RobloxLogo from '../assets/img/roblox-logo.png';
import XLogo from '../assets/img/x-logo.png';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';

export const Highlights = () => {

return (
<section className="highlight" id="highlights">


<div class="container mt-4">
<div class="masonry-grid mb-4">

    <div class="mb-4">
        <div class="card community-card text-light p-3">
            <div class="card-body">
                <h2 class="card-title text-center mb-2"><i class="fas fa-users"></i></h2>
                <h5 class="card-title text-center">Dawn Of Heroes Community</h5>
                <h6 class="card-subtitle text-center mb-3">Founder and Manager</h6>

                <p class="card-text text-center">
                    Built and managed a <a class="text-reset" href="https://www.roblox.com/communities/2971038/Dawn-Of-Heroes-Community#!/about">community</a> of over <strong>125.4K members</strong>. Led communication, posted development updates, and maintained long-term engagement around the Dawn Of Heroes franchise.
                </p>

                <p class="card-text text-center"><small>Since 2015</small></p>
            </div>
        </div>
    </div>

    <div class="mb-4">
        <div class="text-light text-center">
            <div class="card-body">
            <div className="image-social-icon">
                 <img src={RobloxLogo} alt="Roblox Logo"/>
            </div>
                <h5 class="card-title mb-2">Roblox</h5>
                <p class="card-text">Over <strong>7,500 followers</strong> on <a class="text-reset" href="https://www.roblox.com/users/51613555/profile">Roblox</a>, with <strong>33 million</strong> place visits on my profile alone.</p>
                <p class="card-text">
                    <a href="https://www.roblox.com/users/51613555/profile" class="btn btn-outline-light icon-btn">
                    <img src={RobloxLogo} alt="Roblox Logo" class="icon-btn-logo" />RajithWasHere on Roblox</a>
                </p>
            </div>
        </div>
    </div>

    <div class="mb-4">
        <div class="card bg-primary text-light">
            <div class="card-video-container">
                <iframe
                    class="card-img-top"
                    src="https://www.youtube.com/embed/4N1ILNygA9E"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen>
                </iframe>
            </div>
            <div class="card-body">
                <h5 class="card-title text-center">Dawn Of Heroes 2 | Reveal Trailer</h5>
                <p class="card-text text-center">I released the official reveal trailer for my upcoming game Dawn Of Heroes 2.</p>
                <p class="card-text text-center">
                    <small class="text-reset">May 2023</small>
                </p>
            </div>
        </div>
    </div>


    <div class="mb-4">
        <div class="text-light text-center p-3">
            <div class="card-body">
                <div className="image-social-icon">
                    <img src={XLogo} alt="X Logo" />
                </div>
                <h5 class="card-title mb-2">Twitter</h5>
                <p class="card-text">Over <strong>700 followers</strong> on <a href="https://x.com/RajithWasHere" class="text-light">Twitter</a>.</p>
                <a href="https://x.com/RajithWasHere" class="btn btn-outline-light icon-btn">
                    <img src={XLogo} alt="X Logo" class="icon-btn-logo" />RajithWasHere on Roblox
                </a>
            </div>
        </div>
    </div>

    <div class="mb-4">
        <div class="card text-dark">
            <img class="card-img-top masonry-image" loading="auto" src={require('../assets/img/dawn-of-heroes.jpg')} alt="Dawn Of Heroes Cover Art" />
            <div class="card-body">
                <h5 class="card-title text-center">Dawn of Heroes</h5>
                <h6 class="card-subtitle text-center mb-3 text-muted">An Open-World PvP Superhero Game</h6>
                <p class="card-text text-center">
                    <a class="text-reset" href="https://www.roblox.com/games/262050135/Dawn-Of-Heroes">Dawn of Heroes</a> has been played <strong>33 million</strong> times and has been featured on Roblox multiple times.
                </p>
                <p class="card-text text-center"><small class="text-muted">Active from 2015 to 2019</small></p>
            </div>
        </div>
    </div>

    <div class="mb-4">
        <div class="text-light text-center p-3">
            <div class="card-body">
                <div className="image-social-icon">
                    <img src={navIcon1} alt="LinkedIn Logo" />
                </div>
                <h5 class="card-title mb-2">LinkedIn</h5>
                <p class="card-text">I maintain LinkedIn as a professional place to connect with people.</p>
                <a href="https://www.linkedin.com/in/rajith-rajathurai-9415a6252/" class="btn btn-outline-light icon-btn">
                    <img src={navIcon1} alt="LinkedIn Logo" class="icon-btn-logo" />Connect on LinkedIn
                </a>
            </div>
        </div>
    </div>

    <div class="mb-4">
        <div class="card text-dark">
        <div class="card-video-container">
                <iframe
                    class="card-img-top"
                    src="https://www.youtube.com/embed/02lsOLcIsQU"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen>
                </iframe>
            </div>
            <div class="card-body">
                <h5 class="card-title text-center">Car Chaos</h5>
                <h6 class="card-subtitle text-center mb-3 text-muted">An round-based car game with powers and random events</h6>
                <p class="card-text text-center">
                    <a class="text-reset" href="https://www.roblox.com/games/17687972564/Car-Chaos">Car Chaos</a> was designed, built and deployed in <strong>2 months</strong> to test my development speed and production discipline.
                </p>
                <p class="card-text text-center"><small class="text-muted">Since October 2024</small></p>
            </div>
        </div>
    </div>
    


    <div class="mb-4">
        <div class="card custom-card text-light p-3">
            <div class="card-body">
            <h2 class="card-title text-center mb-2"><i class="fas fa-gamepad"></i></h2>
            <h5 class="card-title text-center">Invision Games</h5>
            <h6 class="card-subtitle text-center mb-3">Software Developer Intern</h6>
            <p class="card-text text-center">
                Developed a full-feature production update for a <a class="text-reset" href="https://www.roblox.com/games/103072644129928/Project-Power">live game</a> with <strong>34M+ visits</strong>, including UI, backend/frontend logic, and 3D assets. Enhanced player experience with a new cosmetic system.
            </p>
            <p class="card-text text-center"><small>October 2025</small></p>
            </div>
        </div>
    </div>

    <div class="mb-4">
        <div class="text-light text-center p-3">
            <div class="card-body">
                <div className="image-social-icon">
                    <img src={navIcon2} alt="GitHub Logo" />
                </div>
                <h5 class="card-title mb-2">GitHub</h5>
                <p class="card-text">I've open sourced two projects that I've made during college on <a href="https://github.com/RajithR2002" class="text-light">GitHub</a>. Check them out!.</p>
                <a href="https://github.com/RajithR2002" class="btn btn-outline-light icon-btn">
                    <img src={navIcon2} alt="GitHub Logo" class="icon-btn-logo" />RajithR2002 on GitHub
                </a>
            </div>
        </div>
    </div>

    <div class="mb-4">
        <div class="card bg-primary text-light">
            <div class="card-video-container">
                <iframe
                    class="card-img-top"
                    src="https://www.youtube.com/embed/YeftDFaD3Gw"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen>
                </iframe>
            </div>
            <div class="card-body">
                <h5 class="card-title text-center">Dawn Of Heroes 2 | Expo Premiere</h5>
                <h6 class="card-subtitle text-center mb-3 text-muted">GSC-23 EXPO</h6>
                <p class="card-text text-center">
                    I premiered the Dawn Of Heroes 2 trailer at the first official GSC Expo, an invite-only showcase highlighting top upcoming Roblox projects.
                </p>
                <p class="card-text text-center">
                    <small class="text-reset">Premiered May 20, 2023</small>
                </p>
            </div>
        </div>
    </div>

</div>
</div>
</section>
)
}