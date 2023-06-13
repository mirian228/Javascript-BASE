class Bank {
  roi() {
    return 0;
  }
}

class Axis extends Bank {
  roi() {
    return 10.0;
  }
}

class Sba extends Bank {
  roi() {
    return 12.5;
  }
}

sba = new Sba();
console.log(sba.roi());

