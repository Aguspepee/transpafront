export function MonthToWord(month_num) {
    const months = [
      { Num: "01", Word: "Enero", ShortWord: "Ene." },
      { Num: "02", Word: "Febrero", ShortWord: "Feb." },
      { Num: "03", Word: "Marzo", ShortWord: "Mar." },
      { Num: "04", Word: "Abril", ShortWord: "Abr." },
      { Num: "05", Word: "Mayo", ShortWord: "May." },
      { Num: "06", Word: "Junio", ShortWord: "Jun." },
      { Num: "07", Word: "Julio", ShortWord: "Jul." },
      { Num: "08", Word: "Agosto", ShortWord: "Ago." },
      { Num: "09", Word: "Septiembre", ShortWord: "Sep." },
      { Num: "10", Word: "Octubre", ShortWord: "Oct." },
      { Num: "11", Word: "Noviembre", ShortWord: "Nov." },
      { Num: "12", Word: "Diciembre", ShortWord: "Dic." },
    ];
    let month_word = months.filter((months)=>months.Num===month_num)[0].Word
  
    return month_word;
  }