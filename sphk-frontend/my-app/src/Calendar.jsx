import React from 'react';
import { format, startOfMonth, endOfMonth, eachDayOfInterval, isBefore, isSameDay } from 'date-fns';
import './Calendar.css';

function Calendar({ upcomingGames, recentGames }) {
    const today = new Date();
    const firstDay = startOfMonth(today);
    const lastDay = endOfMonth(today);
    const totalDays = eachDayOfInterval({ start: firstDay, end: lastDay });

    const getDayClassName = (day) => {
        const dayPassed = isBefore(day, today) && !isSameDay(day, today);

        const sameDay = isSameDay(day, today);
        const upcomingGame = upcomingGames.some(game => isSameDay(new Date(game.date), day));
        const recentGame = recentGames.some(game => isSameDay(new Date(game.date), day));
        if (upcomingGame) return 'dayTile upcomingGameDay';
        if(sameDay) return 'dayTile currentDay';
        if (recentGame) return 'dayTile recentGameDay';
        if(dayPassed) return 'dayTile pastDay';

        return 'dayTile defaultDay';
    };

    const getDayGameName = (day) => {
        const upcomingGame = upcomingGames.find(game => isSameDay(new Date(game.date), day));
        const recentGame = recentGames.find(game => isSameDay(new Date(game.date), day));

        if(upcomingGame){
            return upcomingGame.name;
        }
        if(recentGame){
            return recentGame.name;
        }
        return '';
    }

    return (
        <div className="calendarGrid">
            {totalDays.map(day => (
                <div key={day.toISOString()} className={getDayClassName(day)}>
                    <span className="dayNumber">{format(day, 'd')}</span>
                    {getDayGameName(day) && <div className="gameName">{getDayGameName(day)}</div>}
                </div>
            ))}
        </div>
    );
}

export default Calendar;