/**
A class should not be foreced to implement interfaces it does not use. 
In another words, a class should not be required to implement interfaces
that contain methods it does not need.
Reference : https://dev.to/josuerodriguez98/interface-segregation-principle-2jnk
*/

// class User {
//   constructor(username) {
//     this.username = username;
//   }

//   skipAd() {
//     console.log("Skip ads if user is premium");
//   }

//   startParty() {
//     console.log("Start the party if user is premium");
//   }
// }

// class FreeUser extends User {
//   constructor(username) {
//     super(username);
//   }

//   skipAd() {
//     throw new Error("Free user can't skip ads");
//   }

//   startParty() {
//     throw new Error("Free user can't start party");
//   }
// }

// class PremiumUser extends User {
//   constructor(username) {
//     super(username);
//   }

//   skipAd() {
//     console.log("Ads skipped");
//   }

//   startParty() {
//     console.log("Party started");
//   }
// }

// const premium = new PremiumUser(`premium_username`);
// premium.skipAd();
// premium.startParty();

// const free = new FreeUser(`free_username`);
// free.skipAd();
// free.startParty();

/**
As it stands PremiumUser can only able to skip ads and start parites, we are violiting the
interface segration principle by forcing both User and FreeUser to implement these actions. 

To apply te principle, we may use composition to only give these functionalites to 
PremiumUser. 
*/

class User {
  constructor(username) {
    this.username = username;
  }
}

class FreeUser extends User {
  constructor(username) {
    super(username);
  }
}

class PremiumUser extends User {
  constructor(username) {
    super(username);
  }
}

const premiumBenefit = {
  skipAd() {
    console.log("Ads skipped");
  },

  startParty() {
    console.log("Party started.");
  },
};

Object.assign(PremiumUser.prototype, premiumBenefit);
const premiumUser = new PremiumUser("premium_user");
premiumUser.skipAd();
premiumUser.startParty();

const freeUser = new FreeUser("free_user");

//below lines of codes throw an error as FreeUser class doen't implement skipAd() and startParty() methods
freeUser.skipAd();
freeUser.startParty();
