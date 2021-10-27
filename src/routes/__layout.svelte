<script lang="ts">
	import ReloadPrompt from '$lib/ReloadPrompt/index.svelte';
	import '../app.css';


	const date= new Date()
    let day = date.toLocaleDateString("en-US", {day: "numeric"})
    let weekday = date.toLocaleDateString("en-US", {weekday: "long"}).toUpperCase()
    $: open = false; 
</script>

<svelte:head>
	<link rel="manifest" href="/manifest.webmanifest" />
	<link rel="apple-touch-icon" href="/apple-icon-180.png" />

	<meta
		name="description"
		content="This is a Svelte-Kit PWA skeleton app based on the regular Svelte-kit app."
	/>
	<meta name="apple-mobile-web-app-capable" content="yes" />
	<!-- <link rel="icon" href="/favicon.svg" type="image/svg+xml"> -->
	<link rel="apple-touch-icon" href="/pwa-192x192.png" />
	<!-- <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#00aba9"> -->
	<meta name="msapplication-TileColor" content="#00aba9" />
	<meta name="theme-color" content="#ffffff" />
	<link
		rel="apple-touch-startup-image"
		href="/apple-splash-2048-2732.jpg"
		media="(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
	/>
	<link
		rel="apple-touch-startup-image"
		href="/apple-splash-2732-2048.jpg"
		media="(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
	/>
	<link
		rel="apple-touch-startup-image"
		href="/apple-splash-1668-2388.jpg"
		media="(device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
	/>
	<link
		rel="apple-touch-startup-image"
		href="/apple-splash-2388-1668.jpg"
		media="(device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
	/>
	<link
		rel="apple-touch-startup-image"
		href="/apple-splash-1536-2048.jpg"
		media="(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
	/>
	<link
		rel="apple-touch-startup-image"
		href="/apple-splash-2048-1536.jpg"
		media="(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
	/>
	<link
		rel="apple-touch-startup-image"
		href="/apple-splash-1668-2224.jpg"
		media="(device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
	/>
	<link
		rel="apple-touch-startup-image"
		href="/apple-splash-2224-1668.jpg"
		media="(device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
	/>
	<link
		rel="apple-touch-startup-image"
		href="/apple-splash-1620-2160.jpg"
		media="(device-width: 810px) and (device-height: 1080px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
	/>
	<link
		rel="apple-touch-startup-image"
		href="/apple-splash-2160-1620.jpg"
		media="(device-width: 810px) and (device-height: 1080px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
	/>
	<link
		rel="apple-touch-startup-image"
		href="/apple-splash-1284-2778.jpg"
		media="(device-width: 428px) and (device-height: 926px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"
	/>
	<link
		rel="apple-touch-startup-image"
		href="/apple-splash-2778-1284.jpg"
		media="(device-width: 428px) and (device-height: 926px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)"
	/>
	<link
		rel="apple-touch-startup-image"
		href="/apple-splash-1170-2532.jpg"
		media="(device-width: 390px) and (device-height: 844px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"
	/>
	<link
		rel="apple-touch-startup-image"
		href="/apple-splash-2532-1170.jpg"
		media="(device-width: 390px) and (device-height: 844px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)"
	/>
	<link
		rel="apple-touch-startup-image"
		href="/apple-splash-1125-2436.jpg"
		media="(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"
	/>
	<link
		rel="apple-touch-startup-image"
		href="/apple-splash-2436-1125.jpg"
		media="(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)"
	/>
	<link
		rel="apple-touch-startup-image"
		href="/apple-splash-1242-2688.jpg"
		media="(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"
	/>
	<link
		rel="apple-touch-startup-image"
		href="/apple-splash-2688-1242.jpg"
		media="(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)"
	/>
	<link
		rel="apple-touch-startup-image"
		href="/apple-splash-828-1792.jpg"
		media="(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
	/>
	<link
		rel="apple-touch-startup-image"
		href="/apple-splash-1792-828.jpg"
		media="(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
	/>
	<link
		rel="apple-touch-startup-image"
		href="/apple-splash-1242-2208.jpg"
		media="(device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"
	/>
	<link
		rel="apple-touch-startup-image"
		href="/apple-splash-2208-1242.jpg"
		media="(device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)"
	/>
	<link
		rel="apple-touch-startup-image"
		href="/apple-splash-750-1334.jpg"
		media="(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
	/>
	<link
		rel="apple-touch-startup-image"
		href="/apple-splash-1334-750.jpg"
		media="(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
	/>
	<link
		rel="apple-touch-startup-image"
		href="/apple-splash-640-1136.jpg"
		media="(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
	/>
	<link
		rel="apple-touch-startup-image"
		href="/apple-splash-1136-640.jpg"
		media="(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
	/>
</svelte:head>

<section  id="layout">
    <nav class="nav-one">
        <div class="nv">
            <div on:click={() => {open = !open}} class="menu">
                <div class="line-1"></div>
                <div class="line-2"></div>
                <div class="line-3"></div>
            </div>
            <div class="brand">
                <a  href="/">
                    <span>             
                        <img src="assets/logo.png" width="50px" alt="logo">
                    </span>
                    <span>
                        <h1>BDEC</h1>
                    </span>    
              </a>        
            </div>
            <div class:open={open} on:click={() => {open = !open}} class="nav-bar">
                <ul on:click={() => {open = open}} class="navlist">
                    <div style="background-image: url('assets/draw.png')" class="navDisplay">
                        <img src="assets/head.svg" width="60px" alt="avatar">
                        <h1>FAITH LAKALAKA</h1>
                    </div>

                    <li><a  href="https://www.bdec.vercel.app"><span><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="16" height="16" viewBox="0 0 16 16"><defs><clipPath id="a"><rect width="16" height="16" fill="none"/></clipPath></defs><g clip-path="url(#a)"><rect width="16" height="16" fill="none"/><path d="M-937.766-17060.707h-1.411a4.815,4.815,0,0,1-4.234-2.637l-1.694-3.295a2.783,2.783,0,0,0-2.544-1.6H-950v-1.881h2.351a4.817,4.817,0,0,1,4.238,2.637l1.694,3.293a2.773,2.773,0,0,0,2.54,1.6h1.411v-1.883l3.766,2.826-3.766,2.822Zm-12.234,0v-1.883h2.351a2.766,2.766,0,0,0,2.073-.848l.375.941a5.282,5.282,0,0,0,.472.754,4.414,4.414,0,0,1-2.919,1.035Zm12.234-7.529h-1.411a2.78,2.78,0,0,0-2.073.848l-.375-.939a5.184,5.184,0,0,0-.472-.754,4.414,4.414,0,0,1,2.919-1.035h1.411V-17072l3.766,2.82-3.766,2.828Z" transform="translate(950 17074)" fill="#2699fb"/></g></svg></span><span>UPDATES</span></a></li>

                    <li><a   href="/info"><span><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="16.003" height="16.002" viewBox="0 0 16.003 16.002"><defs><clipPath id="a"><rect width="16.003" height="16.002" fill="none"/></clipPath></defs><g clip-path="url(#a)"><path d="M12,16V4h4V16ZM6,16V0h4V16ZM0,16V8H4v8Z" fill="#2699fb"/></g></svg></span><span>INFORMATION</span></a></li>

                    <li><a   href="/about"><span><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="16" height="16" viewBox="0 0 16 16"><defs><clipPath id="a"><rect width="16" height="16" fill="none"/></clipPath></defs><g clip-path="url(#a)"><rect width="16" height="16" fill="none"/><path d="M8,0a8,8,0,1,0,8,8A8.024,8.024,0,0,0,8,0ZM7.92,13.28a1.12,1.12,0,1,1,1.12-1.12A1.094,1.094,0,0,1,7.92,13.28Zm2.16-6.24L9.2,8a.977.977,0,0,0-.32.72.973.973,0,0,1-.96.96.924.924,0,0,1-.96-.96A1.785,1.785,0,0,1,7.6,7.28l.72-.88a1.816,1.816,0,0,0,.56-1.12A.839.839,0,0,0,8,4.4a.941.941,0,0,0-.96.72,1.045,1.045,0,0,1-.96.56A.839.839,0,0,1,5.2,4.8a.87.87,0,0,1,.08-.4A2.666,2.666,0,0,1,8,2.72a2.592,2.592,0,0,1,2.8,2.56A2.625,2.625,0,0,1,10.08,7.04Z" fill="#2699fb"/></g></svg></span><span>ABOUT</span></a></li>
                </ul>
            </div>
        </div>
    </nav>
	<main>
		<slot />
	</main>

    <nav class="nav-two">
        <div class="nv">
            <div class="nv-left">
                <div class="date">
                    <p>{day} | {weekday}</p>
                </div>
            </div>
            <div class="nv-right">
                <ul class="nav-links">
                    <li><a   href="/reminder"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="14" height="14" viewBox="0 0 14 14"><defs><clipPath id="a"><rect width="14" height="14" fill="none"/></clipPath></defs><g clip-path="url(#a)"><path d="M0,0V3.5H14V0ZM2.625,2.625H.875V.875h1.75ZM0,8.75H14V5.25H0ZM.875,6.125h1.75v1.75H.875ZM0,14H14V10.5H0Zm.875-2.625h1.75v1.75H.875Z" fill="#2699fb"/></g></svg></a></li>
                    <li><a  href="/table"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="16" height="16" viewBox="0 0 16 16"><defs><clipPath id="a"><rect width="16" height="16" fill="none"/></clipPath></defs><g clip-path="url(#a)"><rect width="16" height="16" fill="none"/><path d="M2,5v9H14V5ZM13,2h2a.945.945,0,0,1,1,1V15a.945.945,0,0,1-1,1H1a.945.945,0,0,1-1-1V3A.945.945,0,0,1,1,2H3V1A.945.945,0,0,1,4,0,.945.945,0,0,1,5,1V2h6V1a1,1,0,0,1,2,0ZM12,12H10V10h2ZM9,12H7V10H9Zm3-3H10V7h2ZM9,9H7V7H9ZM6,12H4V10H6Z" fill="#2699fb" fill-rule="evenodd"/></g></svg></a></li>
                   
                </ul>
            </div>
        </div>
        
    </nav>
</section>

<ReloadPrompt />
<style lang="scss">
    :global(body) {
        color: blue;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :root{
        --bc:#f5f5f5;
        --tc:hsl(0, 0%, 25%);
        --lc:seashell;
        --bl:#2699fb;
        --fb:#EBF1F6;
        --fm: #d3dee7;
        --tbc: #d3dee7;
    }
    @mixin font($c, $s, $w) {
        font-family:Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing:antialiased;
        -moz-osx-font-smoothing:grayscale;
        color:$c;
        font-size: $s;
        font-weight:$w;

    }
    #layout{
        .nav-one{
            z-index: 99;
            position: fixed;
            width: 100%;
            background: var(--bc);
            top: 0;
            left: 0;
            .nv{
                box-shadow: #0000002c 0px 3px 11px 0px;
                display: flex;
                align-items: center;
                background: var(--bc);
                .menu{
                    padding: 20px;
                    position: relative;
                    z-index: 100;
                    background:#00000007;
                    div{
                        width: 20px;
                        height: 3px;
                        background: var(--tc);
                     
                    }
                    .line-2{
                        margin: 5px 0px;
                        width: 12px;
                    }
                   
                    
                }
                .brand{
                    padding: 0px 10px;
                    a{
                        display: flex;
                        align-items: center;
                        padding: 3px 15px;
                        text-decoration: none;
                        h1{
                            padding: 0px 15px;
                            @include font(var(--tc), 1rem, 500);  
                        }
                    }
                }
                .open{
                    width: 100% !important;
                    transition: all 1s ease !important;
                    opacity: 100% !important;
                    pointer-events: all !important;
                }
                .nav-bar{
                    z-index: 99;
                    position: fixed;
                    top: 0;
                    left: 0;
                    background: #0000001e;
                    opacity: 0;
                    width:0;
                    height: 100vh;
                    overflow: hidden;
                    padding: 0;
                    transition: all 0.5s ease;
                    pointer-events: none;
                    .navlist{
                        .navDisplay{
                            background: #00000085;
                            background-blend-mode: multiply;
                            display: flex;
                            padding-top: 50px;
                            flex-direction: column;
                            align-items: center;
                            justify-content: center;
                            background-size: contain;
                            background-repeat: no-repeat;
                            h1{
                                @include font(var(--lc), 1rem, 400)
                            }
                        }
                        background: var(--fb);
                        height: 100vh;
                        width: 65%;
                    }
                    ul{
                        margin: 0;
                        padding: 0;
                        li{
                            list-style: none;
                            padding: 20px 10px;
                            overflow: hidden;
                            
                            a{
                                text-decoration: none;
                                @include font(var(--tc), 0.95rem, 500);
                                padding-top: 20px;
                                padding-bottom: 20px;
                                padding-left: 10px;
                                padding-right: 35px;
                                
                                span{
                                    padding: 0px 5px;
                                    svg{
                                        filter: grayscale(50%);
                                    }
                                }
                                
                            }
                            &:hover{
                                background: #2699fb;
                            }
                        }
                    }
                }
            }

        }
        .nav-two{
            box-shadow: #00000040 0px -3px 9px;
            background: var(--bc);
            position: fixed;
            z-index:2;
            left:0;
            bottom: 0;
            width: 100%;
            .nv{
                padding: 0px 20px;
                display: flex;
                justify-content: space-between;
                align-items: center;
                .nv-left{
                    .date{
                        @include font(var(--tc), 1rem, 400)
                    }
                }
                .nv-right{
                    width: 50%;
                    height: auto;
                    
                    ul{
                        padding: 10px;
                        margin: 0;
                    }
                    .nav-links{
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                        li{
                            list-style: none;
                            padding: 0;
                            margin: 0;
                            a{
                                filter: grayscale(35%);
                                padding: 10px;
                            }
                        }
                    }

                }
            }

        }
    }
</style>