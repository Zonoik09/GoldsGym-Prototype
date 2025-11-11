import React, { useState } from "react";
import classVideo from "@/assets/Legacy Video with Locations.mp4";

type ClassSchedule = {
  day: string;
  time: string;
  className: string;
  instructor: string;
};

type Schedules = Record<string, ClassSchedule[]>;

const schedules: Schedules = {
  countryhills: [
    { day: "Sun", time: "6:00 PM - 7:00 PM", className: "Bollywood Dance", instructor: "Pinky" },
    { day: "Sun", time: "7:30 PM - 8:30 PM", className: "Boxing", instructor: "Robbie" },
    { day: "Mon", time: "6:00 PM - 6:45 PM", className: "Step", instructor: "Roulia" },
    { day: "Wed", time: "6:00 PM - 6:45 PM", className: "Bootcamp", instructor: "Trisha" },
    { day: "Thu", time: "6:30 PM - 7:30 PM", className: "Zumba", instructor: "Byron" },
    { day: "Fri", time: "11:00 AM - 11:45 AM", className: "Bootcamp", instructor: "Trisha" },
    { day: "Sat", time: "11:30 AM - 12:15 PM", className: "Bootcamp", instructor: "Trisha" },
    { day: "Tue", time: "7:30 PM - 8:30 PM", className: "Boxing", instructor: "Robbie" },
  ],
  douglasdale: [
    { day: "Sun", time: "10:00 AM - 10:45 AM", className: "Spin", instructor: "Jodi" },
    { day: "Sun", time: "11:00 AM - 11:45 AM", className: "Yoga", instructor: "Katlyn" },
    { day: "Mon", time: "9:00 AM - 9:45 AM", className: "Spin", instructor: "Kristi" },
    { day: "Mon", time: "6:00 PM - 7:00 PM", className: "Boxing", instructor: "Lindsay" },
    { day: "Tue", time: "6:00 PM - 6:45 PM", className: "Bootcamp", instructor: "Kristi" },
    { day: "Wed", time: "5:45 AM - 6:30 AM", className: "Spin", instructor: "Kristi" },
    { day: "Thu", time: "6:00 PM - 6:45 PM", className: "Bootcamp", instructor: "Kristi" },
    { day: "Fri", time: "10:30 AM - 11:15 AM", className: "Pilates", instructor: "Kristi" },
    { day: "Sat", time: "9:30 AM - 10:30 AM", className: "Spin+", instructor: "Kristi" },
  ],
  buffalorun: [
    { day: "Sun", time: "11:00 AM - 12:30 PM", className: "Boxing", instructor: "Robbie" },
    { day: "Mon", time: "6:00 PM - 6:45 PM", className: "Spin", instructor: "Jodi" },
    { day: "Tue", time: "6:30 PM - 7:30 PM", className: "Boxing", instructor: "Robbie" },
    { day: "Wed", time: "6:00 PM - 6:45 PM", className: "Spin", instructor: "Jodi" },
    { day: "Thu", time: "9:00 AM - 9:45 AM", className: "Spin", instructor: "Jodi" },
    { day: "Fri", time: "10:00 AM - 10:45 AM", className: "Spin", instructor: "Jodi" },
  ],
};

// Mapeo de abreviaciones → nombres completos
const dayNames: Record<string, string> = {
  Sun: "Sunday",
  Mon: "Monday",
  Tue: "Tuesday",
  Wed: "Wednesday",
  Thu: "Thursday",
  Fri: "Friday",
  Sat: "Saturday",
};

const daysOfWeek = Object.keys(dayNames); // ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

const timeSlots = [
  "5:00 AM", "6:00 AM", "7:00 AM", "8:00 AM", "9:00 AM", "10:00 AM", "11:00 AM",
  "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM",
  "6:00 PM", "7:00 PM", "8:00 PM",
];

interface GroupClassesProps {
  locationId: string;
}

const GroupClasses: React.FC<GroupClassesProps> = ({ locationId }) => {
  const locationKey = locationId.toLowerCase().replace(/[-\s]+/g, "");
  const schedule = schedules[locationKey] || [];

  const [selectedClass, setSelectedClass] = useState<ClassSchedule | null>(null);

  const parseHour = (timeStr: string) => {
    const [hour, minutePart] = timeStr.split(":");
    const [minutes, ampm] = minutePart.split(" ");
    let h = parseInt(hour);
    if (ampm === "PM" && h !== 12) h += 12;
    if (ampm === "AM" && h === 12) h = 0;
    return h + parseInt(minutes) / 60;
  };

  const getClassForSlot = (day: string, time: string) => {
    const slotHour = parseHour(time);
    return schedule.find((c) => {
      if (c.day !== day) return false;
      const [start] = c.time.split(" - ");
      const startHour = parseHour(start);
      return Math.abs(startHour - slotHour) < 1;
    });
  };

  const formattedTitle = locationId.replace(/[-]/g, " ").toUpperCase();

  return (
    <section className="relative py-16 bg-primary text-white">
      <div className="container mx-auto px-4">
        {/* Intro */}
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl font-bold text-gold mb-2">
            GROUP FITNESS CLASSES
          </h2>
          <p className="text-xl text-ivory font-semibold mb-2">
            FREE FOR EVERY MEMBER
          </p>
          <p className="text-ivory max-w-2xl mx-auto">
            JOIN OUR FUN AND UNIQUE CLASSES TAUGHT EVERY DAY — SPINNING, BOOTCAMP, YOGA,
            BOXING, PILATES, ZUMBA AND MORE.
          </p>
        </div>

        {/* Schedule Title */}
        <p className="text-center text-gold text-2xl font-bold mb-6">
          {formattedTitle} GGX SCHEDULE
        </p>

        {/* Calendar Table */}
        <div className="overflow-x-auto">
          <table className="min-w-[1000px] w-full border-collapse border border-gold/30 text-center">
            <thead>
              <tr className="bg-black/60">
                <th className="border border-gold/30 py-2 px-3 text-gold font-bold">Time</th>
                {daysOfWeek.map((day) => (
                  <th key={day} className="border border-gold/30 py-2 px-3 text-gold font-bold">
                    {dayNames[day]}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {timeSlots.map((time) => (
                <tr key={time} className="bg-black/30 hover:bg-black/50 transition">
                  <td className="border border-gold/20 py-3 px-2 text-sm font-semibold text-ivory/70">
                    {time}
                  </td>
                  {daysOfWeek.map((day) => {
                    const classInfo = getClassForSlot(day, time);
                    return (
                      <td
                        key={`${day}-${time}`}
                        className={`border border-gold/20 py-3 px-2 ${
                          classInfo
                            ? "bg-gold/10 hover:bg-gold/20 cursor-pointer"
                            : "bg-transparent"
                        }`}
                        onClick={() => classInfo && setSelectedClass(classInfo)}
                      >
                        {classInfo ? (
                          <div className="text-xs">
                            <p className="text-gold font-bold">{classInfo.className}</p>
                            <p className="text-ivory/80">{classInfo.time}</p>
                            <p className="text-ivory/60">by {classInfo.instructor}</p>
                          </div>
                        ) : (
                          <div className="text-[10px] text-ivory/20">—</div>
                        )}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal Detalle de Clase */}
      {selectedClass && (
        <div
          className="fixed inset-0 bg-black/90 backdrop-blur-sm flex items-center justify-center z-50"
          onClick={() => setSelectedClass(null)}
        >
          <div
            className="bg-primary border border-gold/40 rounded-2xl p-8 max-w-5xl w-full mx-4 shadow-2xl relative flex flex-col md:flex-row gap-8"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedClass(null)}
              className="absolute top-3 right-4 text-gold text-2xl font-bold hover:text-ivory z-10"
            >
              ×
            </button>

            <div className="md:w-1/2 flex flex-col justify-center">
              <h3 className="text-3xl font-bold text-gold mb-4">{selectedClass.className}</h3>
              <p className="text-lg text-ivory mb-2">
                <span className="font-semibold text-gold">Day:</span>{" "}
                {dayNames[selectedClass.day] || selectedClass.day}
              </p>
              <p className="text-lg text-ivory mb-2">
                <span className="font-semibold text-gold">Time:</span> {selectedClass.time}
              </p>
              <p className="text-lg text-ivory mb-6">
                <span className="font-semibold text-gold">Instructor:</span> {selectedClass.instructor}
              </p>

              <button
                onClick={() => setSelectedClass(null)}
                className="bg-gold text-black font-bold px-6 py-3 rounded-xl hover:bg-gold/80 transition"
              >
                Close
              </button>
            </div>

            <div className="md:w-1/2 relative rounded-xl overflow-hidden">
              <video
                src={classVideo}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default GroupClasses;
