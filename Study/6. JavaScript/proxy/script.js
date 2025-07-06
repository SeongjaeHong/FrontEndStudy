class Payment {
  request(amount) {}
}

class Cash extends Payment {
  constructor() {
    super();
  }

  request(amount) {
    console.log(`결제요청 완료. 금액: ${amount}`);
  }
}

const targetObj = new Cash();

const paymentProxy = new Proxy(targetObj, {
  get: (object, prop) => {
    if (prop in object) return object[prop];
    else throw new Error('미구현 기능');
  },
});

paymentProxy.request(100);
paymentProxy.nba(100);
