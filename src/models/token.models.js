module.exports = (sequelize, DataTypes) => {

    const Token = sequelize.define("token", {
        Token: {
            type: DataTypes.STRING,
        },
        userId: {
            type: DataTypes.INTEGER,
        },
    })

    return Token;

}