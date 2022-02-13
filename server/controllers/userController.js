const {User} = require('../models/models')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const ApiError = require('../error/ApiError')

const generateJwt = (id, login, role) =>
{
    return jwt.sign(
        {id, login, role},
        process.env.SECRET_KEY,
        {expiresIn: '6h'},
        ''
    )
}

class UserController{
    async login(req, res, next)
    {
        const {login, password} = req.body
        const user = await User.findOne(
            {
                where:
                    {
                    login: login
                    }
            })
        if (!user)
        {
            return next(ApiError.internal('User is not exist'))
        }
        if (user.isDeleted === true)
        {
            return next(ApiError.internal('User deleted. Create new.'))
        }
        let comparePassword = bcrypt.compareSync(password, user.password)
        if (!comparePassword){
            return next(ApiError.internal('Invalid password'))
        }
        const token = generateJwt(user.id, user.login, user.role)
        const role = user.role
        return res.json({token, role})
    }

    async register(req, res, next)
    {
        const {login, password, name, surname, dateOfBirth, role,  isDeleted} = req.body
        if (!login || !password)
        {
            return next(ApiError.badRequest('Invalid login or password'))
        }
        const candidate = await User.findOne({where: {login}})
        if (candidate)
        {
            return next(ApiError.badRequest('Login already used'))
        }
        const hashPassword = await bcrypt.hash(password, 5)
        const users = await User.create({login, password: hashPassword, name, surname, dateOfBirth, role,  isDeleted})
        return res.json(users)
    }

    async checkUser(req, res)
    {
        const token = generateJwt(req.user.id, req.user.login, req.user.role)
        return res.json({token})
    }

    async createUser(req, res)
    {
        const {login, password, name, surname, dateOfBirth, role,  isDeleted} = req.body
        const users = await User.create({login, password, name, surname, dateOfBirth, role,  isDeleted})
        return res.json(users)
    }

    async getAll(req, res)
    {
        let {limit, page} = req.query
        page = page || 1
        limit = limit || 9
        let offset = page * limit - limit
        let users
        users = await User.findAndCountAll({
            limit,
            offset,
            where:
                {
                isDeleted: false
                }
        })
        return res.json(users)
    }

    async getAll1(req, res)
    {
        let {limit, page} = req.query
        page = page || 1
        limit = limit || 9
        let offset = page * limit - limit
        let users
        users = await User.findAndCountAll({})
        return res.json(users)
    }

    async deleteUser(req, res)
    {
        const {id} = req.body
        let users
        users = await User.findOne(
            {
            where:
                {
                id: id
                }
        })
        users.isDeleted = true
        await users.save()
        return res.json(users)
    }

    async changeUser(req, res)
    {
        const {login, password, id, name, surname, dateOfBirth, role, isDeleted} = req.body
        let users
        users = await User.findOne(
            {
            where:
                {
                id: id
                }
        })
        users.login = login
        users.password = password
        users.name = name
        users.surname = surname
        users.dateOfBirth = dateOfBirth
        users.role = role
        users.isDeleted = isDeleted
        await users.save()
        return res.json(users)
    }
}


module.exports = new UserController()