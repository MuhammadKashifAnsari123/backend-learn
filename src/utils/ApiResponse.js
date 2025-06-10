class ApiResponse{
    constructor(
        statusCode,
        data,
        message = "Success",
    ){zz
        this.statusCode = statusCode
        this.data = data
        this.message = message
        this.success = statusCode  < 400
    }
}