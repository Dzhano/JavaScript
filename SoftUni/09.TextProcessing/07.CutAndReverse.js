function CutAndReverse(string){
    let half = Math.ceil(string.length / 2);
    let firstHalf = string.substring(0, half);
    console.log(firstHalf.split('').reverse().join(""));
    let secondHalf = string.substring(half, string.length);
    console.log(secondHalf.split('').reverse().join(""));
}

// CutAndReverse('tluciffiDsIsihTgnizamAoSsIsihT');
// CutAndReverse('sihToDtnaCuoYteBIboJsihTtAdooGoSmI');