const asyncHandler = (requestHandler) => {
    return (req, res, next) => {
        try {
            Promise.resolve(requestHandler(req, res, next));
        } catch (error) {
            next(error);
        }
    };
};

export { asyncHandler };

/*
const asyncHandler = (fn) => async (req, res, next) => {
    try {
        await fn(req, res, next);
    } catch (error) {
        res.status(error.code || 200).json({
            success: false,
            message: error.message,
        });
    }
};
*/
