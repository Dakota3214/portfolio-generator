const profileDataArgs = process.argv.slice(2, process.argv.length);
console.log(profileDataArgs);

// ONE WAY TO WRITE THIS FUNCTION WITH ARROW 
// const printProfileData = (profileDataArr) => {
//     console.log(profileDataArr);
// };

const printProfileData = profileDataArr => {
    // This....
    for (let i = 0; i < profileDataArr.length; i++) {
        console.log(profileDataArr[i]);
    }

console.log("==================");

    // Is the same as this.....
    profileDataArr.forEach((profileItem) => {
        console.log(profileItem);
    });

    console.log("===================");

        // can also be cleaned to look like this
        profileDataArr.forEach(profileItem => console.log(profileItem));
};

printProfileData(profileDataArgs);