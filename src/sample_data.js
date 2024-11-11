
const events = [
    {
        event_date: "11/11/2024",
        event_start: "9:00 AM",
        event_end: "10:15 AM",
        event_name: "Daily Sprint Stand-Ups",
        attendees: ["jane.doe@sysdev.com", "sara.wythe@sysdev.com", "jon.james@sysdev.com"],
        event_owner: "ugo.etudo@sysdev.com",
        desc: "please be ready to report on your progress and progress blockers since the last stand-up. we are running up against our deadline so wee need to see some concrete progress."
    },
    {
        event_date: "11/11/2024",
        event_start: "10:30 AM",
        event_end: "13:30 AM",
        event_name: "Sprint 10 Retrospective",
        attendees: ["sara.wythe@sysdev.com", "jon.james@sysdev.com"],
        event_owner: "jane.doe@sysdev.com",
        desc: "We want to focus on what went wrong and why were unable to deliver on the plan for this sprint."
    },
    {
        event_date: "11/12/2024",
        event_start: "9:00 AM",
        event_end: "15:00 AM",
        event_name: "Sprint Planning Meeting",
        attendees: ["jane.doe@sysdev.com", "sara.wythe@sysdev.com", "jon.james@sysdev.com", "steve.stanley@clientfirm.com"],
        event_owner: "ugo.etudo@sysdev.com",
        desc: "the backlog is a mess so we'll start the meeting by cleaning up some items. the client, steve, will be in attendance"
    }
]

module.exports = events;