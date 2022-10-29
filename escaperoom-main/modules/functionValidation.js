const checkParams = (params) => {
    params.map((param) => {
        if (typeof param.param !== param.dataType) {
            return console.error(`Param: ${param.param} doesn't match datatype: ${param.dataType}`)
        }
    })
}

export {checkParams}