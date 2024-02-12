function delay(ms){
    return new Promise(resolve => setTimeout(resolve, ms));
}
async function getApple(){
    await delay(1000);
    return 'apple';
}
async function log(){
    const apple = getApple();
    console.log(apple);
    console.log('hi');
    const apple2 = await getApple();
    console.log('hello');
    console.log(apple2);
}
log();