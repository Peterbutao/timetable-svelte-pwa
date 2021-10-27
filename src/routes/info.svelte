<script>
import {data} from "../stores/store.js"

let core  = $data.filter((items)=>{
    return items.type == "core"
})
let len = core.length
    

</script>
<article>

    <div class="content">
        <header>
            <div class="title">
                <h1>INFORMATION</h1>
            </div>
            <div class="details">
                <div class="title">
                    <p>SUMMARY</p>
                </div>
                <div class="dt">
                    <p>{$data.length} COURSES</p>
                    <p>{len} CORES</p>
                </div>
            </div>
           
         
        </header>
        <main>
            <table>
                <tbody>
                   {#each $data as crs}
                    <tr>
                        <td>
                            <h1>{crs.course.toUpperCase()}</h1>
                            <h2>{crs.type}</h2>
                            <p>{crs.gpa} GPA</p>
                            <p>{crs.lecturer}</p>
                            <p>{crs.code}</p>
                        </td>
                        
                     

                    </tr>
                    <tr><td style="background:var(--tbc);opacity:100%" ><br></td></tr>
                    {/each}
                </tbody>
            </table>
        </main>
    </div>
</article>
<style lang="scss">
    @mixin font($c, $s, $w) {
        font-family:Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing:antialiased;
        -moz-osx-font-smoothing:grayscale;
        color:$c;
        font-size: $s;
        font-weight:$w;

    }
    article{
        min-height: 100vh;
        background:var(--bc);
        position: relative;
        z-index: 150;
        width: 100%;
        top: 0;
        left: 0;
      
        .content{
            main{
                padding-top: 50vh;
                padding-bottom: 10vh;
                background: var(--tbc);
                table{
                    width: 100%;
                    tbody{
                        tr{
                            background:var(--fb);
                            
                            td{
                                padding: 0px 5px;
                                margin: 10px;
                                h1{
                                    @include font(var(--tc), 1rem, 400 )
                                }
                                h2{
                                    @include font(var(--bl), 0.75rem, 600 )
                                }
                                p{
                                    @include font(var(--tc), 0.95rem, 400);
                                    text-align: right;
                                }
                            }
                        }
                    }
                }
            }
            header{
                padding-top: 5vh;
                position: fixed;
                background: var(--bc);
                left: 0;
                top: 0;
                width: 100%;
                .title{
                    h1{
                        text-align: right;
                        padding: 0 10px;
                        @include font(var(--tc), 1rem, 400);
                        
                    }
                }
                .details{
                    padding:5px;
                    @include font(var(--tc), 0.95rem, 400);
                    .dt{
                        border-right: var(--bl) 1px solid;
                        padding-left: 5px;
                        color: var(--bl);
                    }
                    a{
                        text-decoration: none;
                        @include font(var(--bl), 0.95rem, 400);
                        text-transform: uppercase;
                    }
                    .title{
                        @include font(var(--tc), 1rem, 400);
                    }
                }
                

            }
        }
    }
</style>