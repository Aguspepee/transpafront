const DemoData = {
  resources: [
    {
      id: "r0",
      name: " Grupo Inspección 1",
      groupOnly: true
    },
    {
      id: "r1",
      name: "Jorge Nicolas Gallardo",
      parentId: "r0"
    },
    {
      id: "r2",
      name: "Alan Braian Wattson",
      parentId: "r0"
    },
    {
      id: "r3",
      name: "Eduardo Daniel Fuentes",
      parentId: "r0"
    },
    {
      id: "r4",
      name: "Juan Pablo Huincha",
      parentId: "r0"
    },
    {
      id: "r5",
      name: "Exequiel Gomez",
      parentId: "r0"
    },
    {
      id: "r6",
      name: "Franco Ullmann",
      parentId: "r0"
    },
    {
      id: "r7",
      name: " Grupo Inspección 2",
      groupOnly: true
    },
    {
      id: "r8",
      name: "Maria Eugenia Aravena",
      parentId: "r7"
    },
    {
      id: "r9",
      name: "Maria Jimena Alvarez",
      parentId: "r7"
    },
    {
      id: "r12",
      name: "Martin Saucedo",
      parentId: "r7"
    },
    {
      id: "r13",
      name: "Matías Agustín Julien",
      parentId: "r7"
    },
/*     {
      id: "r14",
      name: "Grupo RX",
      groupOnly: true
    },
    {
      id: "r15",
      name: "Maria Eugenia Aravena",
      parentId: "r14"
    },
    {
      id: "r16",
      name: "Maria Jimena Alvarez",
      parentId: "r14"
    },

    {
      id: "r17",
      name: "Maria Jimena Alvarez",
      parentId: "r14"
    },
    {
      id: "r18",
      name: "Maria Jimena Alvarez",
      parentId: "r14"
    },
    {
      id: "r19",
      name: "Maria Jimena Alvarez",
      parentId: "r14"
    }, */

  ],
  events: [
    {
      id: 1,
      start: "2020-07-20 15:35:00",
      end: "2020-07-24 23:30:00",
      resourceId: "r1",
      title: "YPF - Tanques",
      bgColor: "#E77577",
    }, 
    {
      id: 2,
      start: "2020-07-20 15:35:00",
      end: "2020-07-22 23:30:00",
      resourceId: "r2",
      title: "YPF - Tanques",
      bgColor: "#E77577",
    },
    {
      id: 3,
      start: "2020-07-23 15:35:00",
      end: "2020-07-24 23:30:00",
      resourceId: "r2",
      title: "YPF - LLL",
      bgColor: "#6C88C4",
    },
    {
      id: 4,
      start: "2020-07-20 15:35:00",
      end: "2020-07-22 23:30:00",
      resourceId: "r3",
      title: "YPF - Tanques",
      bgColor: "#E77577",
    },
    {
      id: 5,
      start: "2020-07-23 15:35:00",
      end: "2020-07-23 23:30:00",
      resourceId: "r3",
      title: "YPF - LLL",
      bgColor: "#6C88C4",
    },
    {
      id: 6,
      start: "2020-07-24 15:35:00",
      end: "2020-07-24 23:30:00",
      resourceId: "r3",
      title: "YPF - Tanques",
      bgColor: "#E77577",
    },
    {
      id: 7,
      start: "2020-07-20 15:35:00",
      end: "2020-07-22 23:30:00",
      resourceId: "r4",
      title: "YPF - Tanques",
      bgColor: "#E77577",
    },
    {
      id: 8,
      start: "2020-07-23 15:35:00",
      end: "2020-07-23 23:30:00",
      resourceId: "r4",
      title: "Total - Planta 1",
      bgColor: "#6C88C4",
    },
    {
      id: 9,
      start: "2020-07-24 15:35:00",
      end: "2020-07-24 23:30:00",
      resourceId: "r4",
      title: "Total - Tanques",
      bgColor: "#19334F",
    },
    {
      id: 1,
      start: "2020-07-20 15:35:00",
      end: "2020-07-24 23:30:00",
      resourceId: "r5",
      title: "YPF - Tanques",
      bgColor: "#E77577",
    }, 
    {
      id: 2,
      start: "2020-07-20 15:35:00",
      end: "2020-07-22 23:30:00",
      resourceId: "r6",
      title: "YPF - Tanques",
      bgColor: "#04D8DC",
    },
    {
      id: 3,
      start: "2020-07-23 15:35:00",
      end: "2020-07-24 23:30:00",
      resourceId: "r6",
      title: "YPF - LLL",
      bgColor: "#6C88C4",
    },
    {
      id: 4,
      start: "2020-07-20 15:35:00",
      end: "2020-07-22 23:30:00",
      resourceId: "r8",
      title: "YPF - Tanques",
      bgColor: "#04D8DC",
    },
    {
      id: 5,
      start: "2020-07-23 15:35:00",
      end: "2020-07-23 23:30:00",
      resourceId: "r8",
      title: "YPF - LLL",
      bgColor: "#6C88C4",
    },
    {
      id: 6,
      start: "2020-07-24 15:35:00",
      end: "2020-07-24 23:30:00",
      resourceId: "r9",
      title: "YPF - Tanques",
      bgColor: "#E77577",
    },
    {
      id: 7,
      start: "2020-07-20 15:35:00",
      end: "2020-07-22 23:30:00",
      resourceId: "r9",
      title: "YPF - Tanques",
      bgColor: "#E77577",
    },
    {
      id: 8,
      start: "2020-07-23 15:35:00",
      end: "2020-07-23 23:30:00",
      resourceId: "r9",
      title: "Total - Planta 1",
      bgColor: "#6C88C4",
    },
    {
      id: 9,
      start: "2020-07-24 15:35:00",
      end: "2020-07-24 23:30:00",
      resourceId: "r8",
      title: "Total - Tanques",
      bgColor: "#19334F",
    },
    {
      id: 1,
      start: "2020-07-20 15:35:00",
      end: "2020-07-24 23:30:00",
      resourceId: "r10",
      title: "YPF - Tanques",
      bgColor: "#04D8DC",
    }, 
    {
      id: 2,
      start: "2020-07-20 15:35:00",
      end: "2020-07-22 23:30:00",
      resourceId: "r11",
      title: "YPF - Tanques",
      bgColor: "#6C88C4",
    },
    {
      id: 3,
      start: "2020-07-23 15:35:00",
      end: "2020-07-24 23:30:00",
      resourceId: "r11",
      title: "YPF - LLL",
      bgColor: "#6C88C4",
    },
    {
      id: 4,
      start: "2020-07-20 15:35:00",
      end: "2020-07-22 23:30:00",
      resourceId: "r12",
      title: "YPF - Tanques",
      bgColor: "#04D8DC",
    },
    {
      id: 5,
      start: "2020-07-23 15:35:00",
      end: "2020-07-23 23:30:00",
      resourceId: "r12",
      title: "YPF - LLL",
      bgColor: "#6C88C4",
    },
    {
      id: 6,
      start: "2020-07-24 15:35:00",
      end: "2020-07-24 23:30:00",
      resourceId: "r12",
      title: "YPF - Tanques",
      bgColor: "#6C88C4",
    },
     {
      id: 7,
      start: "2020-07-20 15:35:00",
      end: "2020-07-22 23:30:00",
      resourceId: "r13",
      title: "YPF - Tanques",
      bgColor: "#04D8DC",
    },
    {
      id: 8,
      start: "2020-07-23 15:35:00",
      end: "2020-07-23 23:30:00",
      resourceId: "r13",
      title: "Total - Planta 1",
      bgColor: "#6C88C4",
    },
    {
      id: 9,
      start: "2020-07-24 15:35:00",
      end: "2020-07-24 23:30:00",
      resourceId: "r13",
      title: "Total - Tanques",
      bgColor: "#04D8DC",
    },
   /*  {
      id: 1,
      start: "2020-07-18 09:30:00",
      end: "2020-07-19 23:30:00",
      resourceId: "r1",
      title: "I am unavailable",
      bgColor: "#6C88C4",
      showPopover: false
    }, */
/*     {
      id: 2,
      start: "2020-07-22 12:30:00",
      end: "2020-07-23 23:30:00",
      resourceId: "r2",
      title: "Not Ideal",
      bgColor: "#DAA520"
    }, */
    /* {
      id: 3,
      start: "2020-07-21 15:30:00",
      end: "2020-07-21 23:30:00",
      resourceId: "r5",
      title: "Seeking sub",
      endResizable: false,
      bgColor: "green"
    },
    {
      id: 4,
      start: "2020-07-19 15:35:00",
      end: "2020-07-19 23:30:00",
      resourceId: "r6",
      title: "Modification for hours worked"
    },  */
/*     {
      id: 5,
      start: "2020-07-19 17:30:00",
      end: "2020-07-19 23:30:00",
      resourceId: "r1",
      title: "Unavailable (recurring weekly)",
      rrule: "FREQ=WEEKLY;DTSTART=20171219T013000Z;BYDAY=TU,FR",
      bgColor: "red"
    } */
  ]
  // eventsForTaskView: [
  //   {
  //     id: 1,
  //     start: "2020-07-18 09:30:00",
  //     end: "2020-07-18 23:30:00",
  //     resourceId: "r1",
  //     title: "I am unavailable",
  //     bgColor: "#6C88C4",
  //     groupId: 1,
  //     groupName: "Task1"
  //   },
  //   {
  //     id: 2,
  //     start: "2020-07-18 12:30:00",
  //     end: "2020-07-26 23:30:00",
  //     resourceId: "r2",
  //     title: "I am not resizable",
  //     resizable: false,
  //     groupId: 2,
  //     groupName: "Task2"
  //   },
  //   {
  //     id: 3,
  //     start: "2020-07-19 12:30:00",
  //     end: "2020-07-20 23:30:00",
  //     resourceId: "r3",
  //     title: "I am not movable",
  //     movable: false,
  //     groupId: 3,
  //     groupName: "Task3"
  //   },
  //   {
  //     id: 7,
  //     start: "2020-07-19 15:40:00",
  //     end: "2020-07-20 23:30:00",
  //     resourceId: "r7",
  //     title: "I am exceptional",
  //     bgColor: "#FA9E95",
  //     groupId: 4,
  //     groupName: "Task4"
  //   },
  //   {
  //     id: 4,
  //     start: "2020-07-20 14:30:00",
  //     end: "2020-07-21 23:30:00",
  //     resourceId: "r5",
  //     title: "I am not start-resizable",
  //     startResizable: false,
  //     groupId: 1,
  //     groupName: "Task1"
  //   },
  //   {
  //     id: 5,
  //     start: "2020-07-21 15:30:00",
  //     end: "2020-07-22 23:30:00",
  //     resourceId: "r5",
  //     title: "I am not end-resizable",
  //     endResizable: false,
  //     groupId: 3,
  //     groupName: "Task3"
  //   },
  //   {
  //     id: 9,
  //     start: "2020-07-21 16:30:00",
  //     end: "2020-07-21 23:30:00",
  //     resourceId: "r1",
  //     title: "R1 has many tasks",
  //     groupId: 4,
  //     groupName: "Task4"
  //   },
  //   {
  //     id: 6,
  //     start: "2020-07-22 15:35:00",
  //     end: "2020-07-23 23:30:00",
  //     resourceId: "r6",
  //     title: "I am normal",
  //     groupId: 1,
  //     groupName: "Task1"
  //   },
  //   {
  //     id: 8,
  //     start: "2020-07-25 15:50:00",
  //     end: "2020-07-26 23:30:00",
  //     resourceId: "r1",
  //     title: "I am locked",
  //     movable: false,
  //     resizable: false,
  //     bgColor: "red",
  //     groupId: 1,
  //     groupName: "Task1"
  //   },
  //   {
  //     id: 10,
  //     start: "2020-07-26 18:30:00",
  //     end: "2020-07-26 23:30:00",
  //     resourceId: "r2",
  //     title: "R2 has many tasks",
  //     groupId: 4,
  //     groupName: "Task4"
  //   },
  //   {
  //     id: 11,
  //     start: "2020-07-27 18:30:00",
  //     end: "2020-07-27 23:30:00",
  //     resourceId: "r14",
  //     title: "R4 has many tasks",
  //     groupId: 4,
  //     groupName: "Task4"
  //   },
  //   {
  //     id: 12,
  //     start: "2020-07-28 18:30:00",
  //     end: "2020-07-28 23:30:00",
  //     resourceId: "r6",
  //     title: "R6 has many tasks",
  //     groupId: 3,
  //     groupName: "Task3"
  //   }
  // ],
  // eventsForCustomEventStyle: [
  //   {
  //     id: 1,
  //     start: "2020-07-18 09:30:00",
  //     end: "2020-07-19 23:30:00",
  //     resourceId: "r1",
  //     title: "I am unavailable",
  //     bgColor: "#6C88C4",
  //     type: 1
  //   },
  //   {
  //     id: 2,
  //     start: "2020-07-18 12:30:00",
  //     end: "2020-07-26 23:30:00",
  //     resourceId: "r2",
  //     title: "Not Ideal",
  //     resizable: false,
  //     type: 2
  //   },
  //   {
  //     id: 3,
  //     start: "2020-07-19 12:30:00",
  //     end: "2020-07-20 23:30:00",
  //     resourceId: "r3",
  //     title: "I am not movable",
  //     movable: false,
  //     type: 3
  //   },
  //   {
  //     id: 4,
  //     start: "2020-07-19 14:30:00",
  //     end: "2020-07-20 23:30:00",
  //     resourceId: "r5",
  //     title: "I am not start-resizable",
  //     startResizable: false,
  //     type: 1
  //   },
  //   {
  //     id: 5,
  //     start: "2020-07-19 15:30:00",
  //     end: "2020-07-20 23:30:00",
  //     resourceId: "r5",
  //     title: "I am not end-resizable",
  //     endResizable: false,
  //     type: 2
  //   },
  //   {
  //     id: 6,
  //     start: "2020-07-19 15:35:00",
  //     end: "2020-07-19 23:30:00",
  //     resourceId: "r6",
  //     title: "I am normal",
  //     type: 3
  //   },
  //   {
  //     id: 7,
  //     start: "2020-07-19 15:40:00",
  //     end: "2020-07-20 23:30:00",
  //     resourceId: "r7",
  //     title: "I am exceptional",
  //     bgColor: "#FA9E95",
  //     type: 1
  //   },
  //   {
  //     id: 8,
  //     start: "2020-07-19 15:50:00",
  //     end: "2020-07-19 23:30:00",
  //     resourceId: "r1",
  //     title: "I am locked",
  //     movable: false,
  //     resizable: false,
  //     bgColor: "red",
  //     type: 2
  //   },
  //   {
  //     id: 9,
  //     start: "2020-07-19 16:30:00",
  //     end: "2020-07-27 23:30:00",
  //     resourceId: "r1",
  //     title: "R1 has many tasks 1",
  //     type: 3
  //   },
  //   {
  //     id: 10,
  //     start: "2020-07-20 18:30:00",
  //     end: "2020-07-20 23:30:00",
  //     resourceId: "r1",
  //     title: "R1 has many tasks 2",
  //     type: 1
  //   },
  //   {
  //     id: 11,
  //     start: "2020-07-21 18:30:00",
  //     end: "2020-07-22 23:30:00",
  //     resourceId: "r1",
  //     title: "R1 has many tasks 3",
  //     type: 2
  //   },
  //   {
  //     id: 12,
  //     start: "2020-07-23 18:30:00",
  //     end: "2020-07-27 23:30:00",
  //     resourceId: "r1",
  //     title: "R1 has many tasks 4",
  //     type: 3
  //   }
  // ]
};

export default DemoData;
