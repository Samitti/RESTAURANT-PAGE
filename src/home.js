const homeModule = (function () {
    const changeTitle = () => {
        alert('this is changed')
    };

    return {
        changeTitle,
    };
}());

export {
    homeModule,
};