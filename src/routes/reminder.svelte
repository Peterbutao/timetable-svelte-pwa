<script>
    class UuidCls{

        static idOne() {

            const str = 'abcdefghijklm';
            const num = Math.floor(Math.random() * 13);
            const strNum = num - 1

            const subStr = str.substring(strNum, num);
            const idNum = Math.floor(Math.random() * 9);

            return `${subStr}${idNum}`

        };
        static idTwo() {

            const str = 'nopqrstuvwxyz';
            const num = Math.floor(Math.random() * 13);
            const strNum = num - 1

            const subStr = str.substring(strNum, num);
            const idNum = Math.floor(Math.random() * 9);

            return `${subStr}${idNum}`

        };
        static uuid() {
            const idOne = UuidCls.idOne();
            const idTwo = UuidCls.idTwo();

            const id  = `${idOne}${idTwo}`;



            if (id.length == 3) {

                const num = `${Math.floor(Math.random() * 9)}`;

                const idMod = id + num ;

                return idMod;

            }else if(id.length == 2){

                const numM1 = `${Math.floor(Math.random() * 9)}`;
                const numM2 = `${Math.floor(Math.random() * 9)}`;

                const idMod2 = id + numM1 + numM2 ;

                return idMod2;

                
            }else{
                return id;
            };
        };
    };

    ///storage
    class Store{

        static getreminder(key){
            let reminder;
            if(localStorage.getItem(`${key}`) === null){
                reminder = localStorage.setItem(`${key}`, '[]');
            }else{
                reminder = JSON.parse(localStorage.getItem(`${key}`));
            }
            return reminder;
        };
        static addreminder(reminderdata, key){
            const reminders = Store.getreminder(key); 
            const pusharray = [...reminders, reminderdata] 


            localStorage.setItem(`${key}`, JSON.stringify(pusharray));

        };
        static deletereminder(id, key){
            const reminders = Store.getreminder(key);

            reminders.forEach(function(item, index) {
                if(item.id == id) {
                    reminders.splice(index, 1);
                }
            });

            localStorage.setItem(`${key}`, JSON.stringify(reminders));
        };

    };
    //ui class

    class Ui{
        static displayreminder(){
            const store = Store.getreminder("rmndkey")

            store.forEach((item)=>{
                Ui.addreminder(item)
            })

        }
        static addreminder(item){
            const list = document.querySelector('#table');

            const row = document.createElement('tr');
            row.classList.add("tablerow")

            row.innerHTML = `<td class="tabledata">               
                                <h1 class="tabletitle">${item.subject}</h1>
                                <p class="com">${item.note}</p>                                
                                <p class="com">${item.startTime}</p>
                                <p class="com">${item.location}</p>
                            </td>
                            <td class="delete">${item.id}</td>
                             `;

            list.appendChild(row);

        }
        static deletereminder(element) {

            if(element.classList.contains('delete')) {
                element.parentElement.remove();

            };
            


        };

    }

    
 
    class RemindObj{
        constructor(sub, tim, loc, not) {
            this.id = UuidCls.uuid();
            this.subject = sub;
            this.startTime = tim;
            this.location = loc;
            this.note = not;
            this.time = new Date().toLocaleTimeString();
            this.date= new Date().toLocaleDateString();
        }
    }
    
    let s = "";
    let t = "";
    let l = "";
    let n = "";
    
    $: error = false;
    $: errortxt = "";
    //events
    document.addEventListener("DOMContentLoaded", Ui.displayreminder)

    function removeEvent(e) {
        Ui.deletereminder(e.target)
        Store.deletereminder(e.target.textContent, "rmndkey");
    }

    function addEvent(e) { 
        e.preventDefault()              
        // validate 
        if(s === ''){
            error= true
            errortxt = 'SUBJECT CAN NOT BE EMPTY';
    
            setTimeout(function(){
                errortxt = ""
                error = false
            }, 3000);
    
        }else{
    
        
        
    
            // instatiate topic
    
            const reminderobject = new RemindObj(s,t,l,n);
            console.log(reminderobject);
    
            //add to 
            Ui.addreminder(reminderobject)
            Store.addreminder(reminderobject, "rmndkey")
            errortxt = 'REMINDER ADDED';
    
    
    
            // clear filds
                
            setTimeout(function(){
                errortxt="";
                s = "";
            }, 3000);

        }
            

    };
       

    let date = new Date();
    $: clip = false;
</script>
<article>
    <form class:clip={clip}>
        <div id="warn" style="width:100%" class:warn={error}>{errortxt}</div>
        <div class="fm">
            <button on:click={()=>{clip = !clip}} class="done">DONE</button>
            <input type="text" bind:value={s} placeholder="SUBJECT">
            <input type="text" bind:value={t} placeholder="START TIME">
            <input type="text" bind:value={l} placeholder="LOCATION">
            <input type="text"bind:value={n}  placeholder="NOTE">
            <button on:click={addEvent} class="button btn">SUBMIT</button>
        </div>
    </form>
    <div class="content">
        <header>
            <div class="details">
                <div class="title">
                    <p>REMENDERS</p>
                </div>
                <div class="dates">
                    <p>AUGUST</p>
                    <p>{date.getHours()} : {date.getMinutes()}</p>
                </div>
            </div>
            <div on:click={() => {clip = !clip}} class="add-reminder">
                <div class="add">
                    <p>ADD REMINDER</p>
                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="40" height="40" viewBox="0 0 40 40"><defs><clipPath id="a"><rect width="16" height="15.999" fill="none"/></clipPath></defs><g transform="translate(-309 -221)"><rect width="40" height="40" rx="20" transform="translate(309 221)" fill="rgba(38,153,251,0.38)"/><g transform="translate(321 233)" clip-path="url(#a)"><path d="M-4613,16V9h-7V7h7V0h2V7h7V9h-7v7Z" transform="translate(4620)" fill="#fff"/></g></g></svg>
                </div>
            </div>
        </header>
        <main>
            <table>
                <tbody on:click={removeEvent} id="table">
                    

                
                   
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
        background: var(--bc);
        .clip{
            clip-path: circle(1500px) !important;
            -webkit-clip-path: circle(1500px) !important;
            transition: all 0.5s linear;
            
        }
        form{
            position: fixed;
            background: var(--bc);
            top:0;
            height: 100vh;
            z-index: 100;
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            clip-path: circle(0);
            -webkit-clip-path: circle(0);
            transition: all 0.5s ease;

            .warn{
                @include font(var(--tc), 0.87rem, 400);
                background: rgba(255, 0, 0, 0.131);
                width: 100%;
                padding: 15px 0px;
                text-align: center;
            
            }
            
            .fm{
                margin: 20px;
                width: 100%;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content:center;

            }
            input,
            button{
                width: 95%;
                height: 50px;
                margin: 20px 0px;
                
                &:focus{
                    outline: none;
                }
            }
            button{
                background: var(--bl);
                opacity: 50%;
                border: none;
                color: var(--lc)
            }
            .done{
                position: absolute;
                top: 0;
                left:10px;
                width: 50%;
                background:var(--bc);
                color: var(--bl);
                border: var(--bl) solid 1px;

    
            }
            input{
                border: none;
                background: var(--fb);
                border-right: var(--bl) solid 1px;
            }

        }
        .content{
            main{
                padding-top: 40vh;
                padding-bottom: 10vh;
                table{
                    width: 100% ;                  
                     
        
                }
            }
            header{
                padding-top: 14vh;
                position: fixed;
                background: var(--bc);
                left: 0;
                width: 100%;
                .details{
                    border-left: var(--bl) solid 2px;
                    padding-left: 10px;
                    @include font(var(--tc), 0.65rem, 800);
                }
                .add-reminder{
                    .add{
                        display: flex;
                        align-items: center;
                        margin-left: auto;
                        width: 50%;
                        p{
                            padding: 0px 10px;
                            @include font(var(--bl), 0.9rem, 400);

                        }
                    }
                }
                


            }
        }
    }
</style>