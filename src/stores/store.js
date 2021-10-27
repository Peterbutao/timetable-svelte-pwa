import {writable} from "svelte/store";


class WeekdayObj{
    constructor(wd,dy, intm, fntm, loc, typ, hrs) {
        this.weekday = wd,
        this.day = dy;
        this.initialTime= intm,
        this.finalTime = fntm, 
        this.location = loc,
        this.type = typ,
        this.hours = hrs
    }
}
class CourseObj {
    constructor(crs,cd, typ, gpa, lct,wd ) {
        this.id = CourseObj.uuid();
        this.date = CourseObj.date();
        this.course = crs;
        this.type = typ;
        this.gpa = gpa;
        this.code = cd;
        this.lecturer = lct;
        this.weekdays = wd;
    }
    static date() {
        return new Date().getDate()
    }
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
        const idOne = this.idOne();
        const idTwo = this.idTwo();

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
}
const courses = [
    //monday
    new CourseObj("agriculture economics","AAE211","core",2.5,"___",
        [
            new WeekdayObj("Monday",1, "06:00", "07:00", "mph", "lecture", 2),
            new WeekdayObj("Thursday",4, "06:00", "07:00", "mph", "lecture", 2),
            new WeekdayObj("Friday",5, "06:00", "07:00", "mph", "lecture", 2)
            
        ] 
    ),
    
    
    new CourseObj("introduction to nutrition","NFS212","___",3.5,"___",
        [
            new WeekdayObj("Monday",1, "07:00", "10:00", "nut lad", "practical",2),                
            new WeekdayObj("Friday",5, "10:00", "12:00", "Lt1", "lecture",2),                

            
        ] 
    ),

    new CourseObj("introduction to development economics","DEC211","___",2.0,"___",
        [
            new WeekdayObj("Monday",1, "10:00", "12:00", "Lt4", "lecture",2)                

            
        ] 
    ),

    new CourseObj("communication skills","LDC211","___",3.5,"___",
        [
            new WeekdayObj("Monday",1, "12:00", "13:00", "hall", "lecture",1) ,               
            new WeekdayObj("Monday",1, "17:00", "19:00", "hall", "tutorial",2)                

            
        ] 
    ),

    //tuesday

    new CourseObj("mathematics for economists","AAE212","core",2.5,"___",
        [
            new WeekdayObj("Tuesday",2, "07:00", "09:00", "Lt2", "lecture", 2),
            new WeekdayObj("Thursday",4, "11:00", "12:00", "Lt2", "lecture", 1),
            
        ] 
    ),

    //wednesday
    new CourseObj("soil and water conservation","AGE214","___",3.5,"DODOMA MWASINGA",
        [
            new WeekdayObj("Wednesday",3, "07:00", "09:00", "hall", "lecture", 2),
            new WeekdayObj("Wednesday",3, "10:00", "12:00", "field", "pracical", 2),
            
        ] 
    ),
    new CourseObj("statistics for economists","SAT213","___",3.5,"___",
        [
            new WeekdayObj("Wednesday",3, "16:00", "18:00", "Lt3", "lecture", 2),
            new WeekdayObj("Thursday",4, "08:00", "10:00", "hall", "tutorial", 2)
            
        ] 
    ),


    //thursday
    new CourseObj("introduction to financial accounting","ABM211","___",3.5,"___",
        [
            new WeekdayObj("Thursday", 4, "12:00", "14:00", "Lt2", "lecture", 2),
            new WeekdayObj("Thursday", 4, "15:00", "16:00", "Lt1", "lecture", 1),
            
        ] 
    ),

    
    new CourseObj("enterpreneurship","ABM213","___",2.5,"___",
        [
            new WeekdayObj("Thursday",4, "16:00", "17:00", "hall", "lecture", 1),
            new WeekdayObj("Friday",5, "13:00", "15:00", "hall", "lecture", 2)            
            
        ] 
    )
    

]


export const data = writable(courses)
