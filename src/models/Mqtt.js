import { Schema, model } from 'mongoose'
import timezone from 'mongoose-timezone'

const Alarm = Schema(
    {
        tag: String,
        wap: String,
        status: Boolean
    },
    {
        timestamps: true
    }
)

Alarm.plugin(timezone)
export default model('Alarm', Alarm)