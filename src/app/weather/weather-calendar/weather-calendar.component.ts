import { ChangeDetectorRef, Component, Input } from '@angular/core';
import { WeatherService } from '../weather.service';
import { DatePipe } from '@angular/common';


import { CalendarOptions, DateSelectArg, EventClickArg, EventApi, EventInput } from '@fullcalendar/core';
import interactionPlugin from '@fullcalendar/interaction';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';


@Component({
  selector: 'app-weather-calendar',
  templateUrl: './weather-calendar.component.html',
  styleUrls: ['./weather-calendar.component.scss']
})
export class WeatherCalendarComponent {
  weather_Data: any[] = [];

  weather_Result: any[] = [];
  response: any[] = [];
  result_object = {};
  temp = {}
  tempArr:any[] = []

  isFormSubmitted: boolean = false;
  changeCity:any;
  citiesName: any[] = [];
  from_Date: any;
  to_Date: any;
    // filered_Date
    dateWise_filteredData: any[] = [];
    weather_Response: any[] = [];
    weather_flatttedResult : any[] = [];
    dateArr:any=[]
    INITIAL_EVENTS:EventInput[] = []
    //sorting
    sortType:string = "city";
    reverse:boolean = false;
    sortedCityData:any[]=[];
    sortedForecastdayData:any[] = []

    visibleRangeDate:any = {}
    calendarVisible = true;
    calendarOptions: CalendarOptions ={
      plugins: [
        interactionPlugin,
        dayGridPlugin,
        timeGridPlugin,
        listPlugin,
      ],
      headerToolbar: {
        // left: 'prev,next today',
        left:'prev,next',
        center: 'title',
        // right: 'dayGridMonth,customTimeGridWeek,timeGridDay,listWeek,myCustomTitle'
        right:'timeGridWeek',
      },
      // customButtons: {
      //   myCustomTitle: {
      //     text:'click me',
      //     click: () => {
      //       // Implement any action you want when the custom title is clicked
      //      alert('Custom title clicked!');
      //     },
      //   },
      // },
      // ======Custom view===========
      // initialView: 'customTimeGridWeek',  
      // duration: { days: 3 },     // the dynamic setter will change this

      // views: {                                     //custom views
      //   customTimeGridWeek: {
      //     type: 'timeGrid',
      //     // duration: { days: 4 },    // the dynamic setter won't change this
      //     buttonText: 'custom-Day'
      //   }
      // },
      // ================================end===================
      //========Sets the exact date range that is visible in a view.==============
      initialView: 'timeGrid',       
      // visibleRange: {
      //   start: '2023-07-22',
      //   end: '2023-07-24'
      // },
      // =================================end===============
      // events: this.INITIAL_EVENTS, // alternatively, use the `events` setting to fetch from a feed
      // events:[
      //   {title: '14', date: '2023-07-22'},
      //   { title: 'event 2', date: '2023-07-02', time:"01:00"},
      //   { title: 'event 2', date: '2023-07-02', time:"02:00"},
      //   { title: 'event 2', date: '2023-07-02', time:"03:00"},
      //   { title: 'event 2', date: '2023-07-02', time:"04:00"},
      //   { title: 'event 2', date: '2023-07-02', time:"05:00"},
      //   { title: 'event 2', date: '2023-07-02', time:"12:00"},
      //   { title: 'event 2', date: '2023-07-27'}
      // {
      //   title: 'BCH237',
      //   start: '2023-07-26T20:00:00',
       
      //   extendedProps: {
      //     department: 'BioChemistry'
      //   },
      //   description: 'Lecture'
      // }
      // ],
    //   events: [
    //     {
    //         title: "Business Lunch",
    //         start: "2023-07-03T13:00:00",
    //         constraint: "businessHours"
    //     },
    //     {
    //         title: "Meeting",
    //         start: "2023-07-13T11:00:00",
    //         constraint: "availableForMeeting", // defined below
    //         color: 'green'
    //     },
    //     {
    //         title: "Conference",
    //         start: "2023-07-18",
    //         end: "2023-07-20"
    //     },
    //     {
    //         title: "Party",
    //         start: "2023-07-29T20:00:00"
    //     },

    //     // areas where "Meeting" must be dropped
    //     {
    //         groupId: "availableForMeeting",
    //         start: "2023-07-11",
    //         end: "2023-07-11",
    //         display: "background",
    //     },
    //     {
    //         groupId: "availableForMeeting",
    //         start: "2023-07-13",
    //         end: "2023-07-13",
    //         display: "background",
    //     },

    //     // red areas where no events can be dropped
    //     {
    //         start: "2023-07-24",
    //         end: "2023-07-28",
    //         overlap: false,
    //         display: "background",
    //         color: 'red'
    //     },
    //     {
    //         start: "2023-07-06",
    //         end: "2023-07-08",
    //         overlap: false,
    //         display: "background",
    //         color: 'red'
    //     }
    // ],
    // navLinks: true, // can click day/week names to navigate views
    
      // weekends: true,
      editable: true,
      selectable: true,
      selectMirror: true,
      dayMaxEvents: true,  // allow "more" link when too many events
      // eventDidMount: function(info) {
      //   console.log(info.event.extendedProps['description']);
      //   // {description: "Lecture", department: "BioChemistry"}
      // }
      eventDidMount:function(info) {
        var eventElement = info.el;
       
        let descriptionElement = document.createElement('div');
        descriptionElement.innerHTML = info.event.extendedProps['description'];
        eventElement.appendChild(descriptionElement);
        console.log(info.el);
      }
      // dateClick: this.handleDateClick.bind(this)
      // select: this.handleDateSelect.bind(this),
      // eventClick: this.handleEventClick.bind(this),
      // eventsSet: this.handleEvents.bind(this)
      /* you can update a remote database when these fire:
      eventAdd:
      eventChange:
      eventRemove:
      */
    };
    currentEvents: EventApi[] = [];
   
  

  constructor(
    private weatherService: WeatherService,
    private datepipe: DatePipe,
    private changeDetector: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.getWeatherData();
  }

  getWeatherData() {
    // Subscribe to each observable in the array individually
    this.weatherService.getWeather().forEach((subscriber) => {
      subscriber.subscribe(
        (result: any) => {
          // console.log(result);

          Object.assign(this.result_object, result);
          Object.assign(this.result_object, {
            forecast: { date: '', forecastday: [] },
          });

          let resultArr = [];
          //Add date
          
          for (let i = 0; i < 5; i++) {
            const date = new Date('2023-07-21'); // current date
            const nextDate = new Date(
              date.setDate(date.getDate() + i)
            ).toDateString(); // add 'i' days to current date
            let changeDateFormat = this.datepipe.transform(
              nextDate,
              'yyyy-MM-dd'
            ); //convert date format
          
            let tempArr = [];
            let temp_c = {};
            const hoursPerDay = 24;
            const format = (num: number) =>
              num < 10 ? `0${num}:00:00` : `${num}:00:00`;
            for (let hour = 0; hour < hoursPerDay; hour++) {
              const time = `${format(hour)}`;

              temp_c = {
                ...Object.assign(result.current, {
                  
                  temp_c: Math.floor(Math.random() * 100),
                  wind_kph: Math.floor(Math.random() * 100),
                  time: time,
                  city: result.location.name,
                  // date:`${changeDateFormat} ${time}`,
                  date: changeDateFormat,
                  title:`City:${result.location.name}
                    temp:${Math.floor(Math.random() * 100)}C
                    wind_kph:${Math.floor(Math.random() * 100)}kmph`,
                  start:`${changeDateFormat}T${time}`,
                  description:`temp:${Math.floor(Math.random() * 100)}C
                  wind_kph:${Math.floor(Math.random() * 100)}kmph`
                }),
              };
              tempArr.push(temp_c);
            }

            let dateUpdate = {
              ...Object.assign(this.result_object, {
                forecast: { date: changeDateFormat, forecastday: tempArr },
              }),
            };

            resultArr.push(dateUpdate);
            // console.log(resultArr);
          }
          this.weather_Result.push(resultArr);
          // console.log(this.weather_Result);

          //reduce nested array in a array:
          const initialValue: any = [];
          this.weather_Response = this.weather_Result.reduce(
            (total: any, current: any) => total.concat(current),
            initialValue
          );
          // console.log(this.weather_Response);

          //Add all date-wise data in a single array:
          let flattedArr: any = [];
          this.weather_Response.map((data: any) => {
            flattedArr.push(data.forecast.forecastday);
            // console.log(data.forecast.forecastday.reduce( (total:any,curr:any)=> total.concat(curr),[]));
          });
          // console.log(flattedArr);

          this.weather_flatttedResult = flattedArr.reduce(
            (total: any, curr: any) => total.concat(curr),
            []
          );
          this.response = this.weather_flatttedResult;
          
          this.INITIAL_EVENTS = flattedArr.reduce(
            (total: any, curr: any) =>
              total.concat(curr),
            []  
          );
          this.calendarOptions.events = this.INITIAL_EVENTS
          //  console.log("Calendar_Events",this.INITIAL_EVENTS);

          // console.log(this.weather_flatttedResult);

          //Add cities in an array
          this.weather_Result.map((result: any) => {
            // console.log(result);
            let tempArr: any = [];
            result.map((cities: any) => {
              // console.log(cities.forecast.date);
              this.citiesName.push(cities.location.name);
              this.dateArr.push(cities.forecast.date)
              //  console.log(citiesName);
            });
            this.citiesName = [...new Set(this.citiesName)];
            this.dateArr = [...new Set(this.dateArr)]
            // console.log(this.dateArr);
          });
        },
        (error: any) => {
          // Handle the error if necessary
          console.error(error);
        }
      );
    });
  };


  handleDateClick(arg:any) {
    alert('date click! ' + arg.dateStr)
  }
  //when click the date and write any events. this date make clickable using interactionPlugin;Display that events on a particular date 
  handleDateSelect(selectInfo: DateSelectArg) {
    const title = prompt('Please enter a new title for your event');
    const calendarApi = selectInfo.view.calendar;
    // console.log(selectInfo.view.calendar);
    calendarApi.unselect(); // clear date selection

    if (title) {
      calendarApi.addEvent({
        // id: createEventId(),
        title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        allDay: selectInfo.allDay
      });
    }
  }

  handleCalendarToggle() {
    this.calendarVisible = !this.calendarVisible;
  }

  handleWeekendsToggle() {
    const { calendarOptions } = this;
    calendarOptions.weekends = !calendarOptions.weekends;
  }

  //remove the events from the dates
  handleEventClick(clickInfo: EventClickArg) {
    if (confirm(`Are you sure you want to delete the event '${clickInfo.event.title}'`)) {
      clickInfo.event.remove();
    }
  }

  
  handleEvents(events: EventApi[]) {
    this.currentEvents = events;
    this.changeDetector.detectChanges(); // workaround for pressionChangedAfterItHasBeenCheckedError
  }

  // Select city
  addSharedChangeCity(city:any){
    this.changeCity = city     
      // console.log(index);
      if(city){
        this.calendarOptions.events = this.INITIAL_EVENTS.filter( (result:any)=>{
          return result.city.includes(city)
        })
      }else{
        this.calendarOptions.events = this.INITIAL_EVENTS
      }
  }

  // Submit Form
  addSharedFormData(formData:any){
    this.isFormSubmitted = true;
    // date.setDate(date.getDate() + i)
    // console.log(formData);
    // this.changeCity = formData.city;
    // this.from_Date = formData.from_Date;
    this.to_Date = new Date(formData.to_Date)
    this.to_Date = this.to_Date.setDate(this.to_Date.getDate() + 1)
    let lastDateFormat = this.datepipe.transform(
      this.to_Date,
      'yyyy-MM-dd'
    ); //convert date format
    console.log(lastDateFormat);
    
    this.visibleRangeDate = {
      start:formData.from_Date,
      end: lastDateFormat
    };
    this.calendarOptions.visibleRange = this.visibleRangeDate
  };

}
