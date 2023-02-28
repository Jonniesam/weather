export function forecastDay (unix) {
    const date = new Date(unix * 1000);
    let today = date.getDay();
    if(today === 0){
      return 'Sunday'
    } else if(today ===1){
      return 'Monday'
    }else if(today ===2){
      return 'Tuesday'
    }else if(today ===3){
      return 'Wednesday'
    }else if(today ===4){
      return 'Thursday'
    }else if(today ===5){
      return 'Friday'
    }else if(today ===6){
      return 'Saturday'
  } else {
    return 'error day not found'
  }
  }

export function forecastDayNum(unix) {
    const date = new Date(unix * 1000);
    return date.getDate();
  }