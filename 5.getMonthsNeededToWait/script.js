function getMonthsNeededToWait(index1, index2) {
   
    if (index1 > index2) {
      return 12 - index1 + index2;
    }
    return index2 - index1;
}


export { getMonthsNeededToWait };
