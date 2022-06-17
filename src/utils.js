function createDay(index = 0) {
    const day = 24 * 60 * 60 * 1000
    const start = new Date(new Date().getFullYear() + 1, 0, 0);
    const fusoBrasil = 3 * 60 * 60 * 1000
    const currentDay = new Date(start - (getRemainingDaysOfYear() * day - day * index) - fusoBrasil)

    const dayId = new Intl.DateTimeFormat('pt-BR', { timeZone: 'America/Recife' }).format(currentDay)

    const newDay = {
        english: 0,
        codeChallenge: 0,
        roadmap: 0,
        date: currentDay,
        id: dayId
    }

    return newDay
}

const getRemainingDaysOfYear = () => {
    const now = new Date();
    const start = new Date(now.getFullYear() + 1, 0, 0);
    const diff = start - now;
    const oneDay = 1000 * 60 * 60 * 24;
    const day = Math.floor(diff / oneDay);

    return day
}

module.exports = { getRemainingDaysOfYear, createDay }