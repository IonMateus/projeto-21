function isTouching(objeto3,objeto2){

    if (objeto3.x - objeto2.x < objeto2.width/2 + objeto3.width/2
      && objeto2.x - objeto3.x < objeto2.width/2 + objeto3.width/2
      && objeto3.y - objeto2.y < objeto2.height/2 + objeto3.height/2
      && objeto2.y - objeto3.y < objeto2.height/2 + objeto3.height/2) {
  
   return true;
  
  }
  else {
  
     return false;
  
  }
  
  }