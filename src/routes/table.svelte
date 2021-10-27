<script>

	import {data} from "../stores/store.js"
	
	let date = new Date()
   
    function datarow( timeP, dayP){
        
        const store = $data.map(element => { return {...element, weekdays: element.weekdays.filter(weekdays => weekdays.initialTime == timeP)}}
         ).filter(item =>{ return item.weekdays.length !== 0 })

         let code = []
        

        store.forEach(item => {item.weekdays.forEach(element => {
            if(dayP == element.day){
                code = [...code, item.code.substring(0,3)]
                
            }

        })})
        return code
    }

  

</script>


<article id="timetable">
    <div class="time-t">
        <table class="table">
            <thead>
                <tr>
                    <th></th>
                    <th>MON</th>
                    <th>TUE</th>
                    <th>WED</th>
                    <th>THU</th>
                    <th>FRI</th>
                    <th>SAT</th>
                    <th>SUN</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td class="h06" >6 : 00</td>
                   <td class="mo6" >{datarow("06:00",1)}</td>
                    <td class="tu6">{datarow("06:00",2)}</td>
                    <td class="we6">{datarow("06:00",3)}</td>
                    <td class="th6">{datarow("06:00",4)}</td>
                    <td class="fr6">{datarow("06:00",5)}</td>
                    <td class="sa6"></td>
                    <td class="su6"></td>
                </tr>
                <tr>
                    <td class="h07" >7 : 00</td>
                    <td class="mo7">{datarow("07:00",1)}</td>
                    <td class="tu7">{datarow("07:00",2)}</td>
                    <td class="we7">{datarow("07:00",3)}</td>
                    <td class="th7">{datarow("07:00",4)}</td>
                    <td class="fr7">{datarow("07:00",5)}</td>
                    <td class="sa7"></td>
                    <td class="su7"></td>
                </tr>
                <tr>
                    <td class="h08">8 : 00</td>
                    <td class="mo8">{datarow("08:00",1)}</td>
                    <td class="tu8">{datarow("08:00",2)}</td>
                    <td class="we8">{datarow("08:00",3)}</td>
              
                    <td class="th8">{datarow("08:00",4)}</td>
                    <td class="fr8">{datarow("08:00",5)}</td>
                    <td class="sa8"></td>
                    <td class="su8"></td>
                </tr>
                <tr>
                    <td class="h09">9 : 00</td>
                    <td class="mo9">{datarow("09:00",1)}</td>
                    <td class="tu9">{datarow("09:00",2)}</td>
                    <td class="we9">{datarow("09:00",3)}</td>
                    <td class="th9">{datarow("09:00",4)}</td>
                    <td class="fr9">{datarow("09:00",5)}</td>
                    <td class="sa9"></td>
                    <td class="su9"></td>

                </tr>       
                <tr>
                    <td class="h10">10:00</td>
                    <td class="mo10">{datarow("10:00",1)}</td>
                    <td class="tu10">{datarow("10:00",2)}</td>
                    <td class="we10">{datarow("10:00",3)}</td>
                    <td class="th10">{datarow("10:00",4)}</td>
                    <td class="fr10">{datarow("10:00",5)}</td>
                    <td class="sa10"></td>
                    <td class="su10"></td>
                    
                </tr>
                <tr>
                    <td class="h11">11:00</td>
                    <td class="mo11">{datarow("11:00",1)}</td>
                    <td class="tu11">{datarow("11:00",2)}</td>
                    <td class="we11">{datarow("11:00",3)}</td>
                    <td class="th11">{datarow("11:00",4)}</td>
                    <td class="fr11">{datarow("11:00",5)}</td>
                    <td class="sa11"></td>
                    <td class="su11"></td>
                </tr>

                <tr>
                    <td class="h12">12:00</td>
                    <td class="mo12">{datarow("12:00",1)}</td>
                    <td class="tu12">{datarow("12:00",2)}</td>
                    <td class="we12">{datarow("12:00",3)}</td>
                    <td class="th12">{datarow("12:00",4)}</td>
                    <td class="fr12">{datarow("12:00",5)}</td>
                    <td class="sa12"></td>
                    <td class="su12"></td>
                </tr>
                <tr>
                    <td class="h12-50">12:50</td>
                    <td class="mo12-50"></td>
                    <td class="tu12-50"></td>
                    <td class="we12-50"></td>
                    <td class="th12-50"></td>
                    <td class="fr12-50"></td>
                    <td class="sa12-50"></td>
                    <td class="su12-50"></td>
                </tr>
             
                <tr>
                    <td>___</td>
                    <td></td>
                    <td class="t_b12"></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td class="h13">1 : 00</td>
                    <td class="mo13">{datarow("13:00",1)}</td>
                    <td class="tu13">{datarow("13:00",2)}</td>
                    <td class="we13">{datarow("13:00",3)}</td>
                    <td class="th13">{datarow("13:00",4)}</td>
                    <td class="fr13">{datarow("13:00",5)}</td>
                    <td class="sa13"></td>
                    <td class="su13"></td>
                </tr>
                <tr>
                    <td class="h14">2 : 00</td>
                    <td class="mo14">{datarow("14:00",1)}</td>
                    <td class="tu14">{datarow("14:00",2)}</td>
                    <td class="we14">{datarow("14:00",3)}</td>
                    <td class="th14">{datarow("14:00",4)}</td>
                    <td class="fr14">{datarow("14:00",5)}</td>
                    <td class="sa14"></td>
                    <td class="su14"></td>
                </tr>
                <tr>
                    <td class="h15">3 : 00</td>
                    <td class="mo15">{datarow("15:00",1)}</td>
                    <td class="tu15">{datarow("15:00",2)}</td>
                    <td class="we15">{datarow("15:00",3)}</td>
                    <td class="th15">{datarow("15:00",4)}</td>
                    <td class="fr15">{datarow("15:00",5)}</td>
                    <td class="sa15"></td>
                    <td class="su15"></td>
                </tr>
                <tr>
                    <td class="h16">4 : 00</td>
                    <td class="mo16">{datarow("16:00",1)}</td>
                    <td class="tu16">{datarow("16:00",2)}</td>
                    <td class="we16">{datarow("16:00",3)}</td>
                    <td class="th16">{datarow("16:00",4)}</td>
                    <td class="fr16">{datarow("16:00",5)}</td>
                    <td class="sa16"></td>
                    <td class="su16"></td>
                </tr>
                <tr>
                    <td class="h17">5 : 00</td>
                    <td class="mo17">{datarow("17:00",1)}</td>
                    <td class="tu17">{datarow("17:00",2)}</td>
                    <td class="we17">{datarow("17:00",3)}</td>
                    <td class="th17">{datarow("17:00",4)}</td>
                    <td class="fr17">{datarow("17:00",5)}</td>
                    <td class="sa17"></td>
                    <td class="su17"></td>
                </tr>
                <tr>
                    <td class="h18">6 : 00</td>
                    <td class="mo18">{datarow("18:00",1)}</td>
                    <td class="tu18">{datarow("18:00",2)}</td>
                    <td class="we18">{datarow("18:00",3)}</td>
                    <td class="th18">{datarow("18:00",4)}</td>
                    <td class="fr18">{datarow("18:00",5)}</td>
                    <td class="sa18"></td>
                    <td class="su18"></td>
                </tr>
                <tr>
                    <td>___</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    
                </tr>

                <!--night-->

                <tr>
                    <td class="h20">8 : 00</td>
                    <td class="mo20"></td>
                    <td class="tu20"></td>
                    <td class="we20"></td>
                    <td class="th20"></td>
                    <td class="fr20"></td>
                    <td class="sa20"></td>
                    <td class="su20"></td>
                </tr>
               

            </tbody>
        </table>
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
        background: var(--tbc);
        min-height: 100vh;
        .time-t{
            padding-top: 15vh;
            padding-bottom: 10vh;
        }
    }
    table{
    border-spacing: 2px;
    width: 100%;
    padding: 0px 3px;
    padding-bottom: 20px;
    thead{
        tr{
            @include font(var(--tc), 13.5px, 700);
            th{
                width: 50px !important;
                height: 45px !important;
            }
            
        }
    }
    tbody{
        tr{
            @include font(black, 13px, 450);
            text-align: center;
            background-color: white;
            
            td{
                width: 50px !important;
                height: 45px !important;
            }

            

            
         
            
        }

    }
}
</style>