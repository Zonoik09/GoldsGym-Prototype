import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

// Tipos de plan que se pueden mostrar dinámicamente
type PlanType = "golds" | "platinum" | "diamond";

const PaymentPlans = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const queryParams = new URLSearchParams(location.search);
  const planParam = queryParams.get("plan") as PlanType | null;

  const [selectedPlan, setSelectedPlan] = useState<PlanType>("golds");

  useEffect(() => {
    if (planParam) {
      setSelectedPlan(planParam);
    }
  }, [planParam]);

  // Datos estructurados de los planes
  const plansData: Record<PlanType, any> = {
    golds: {
      name: "GOLD'S GYM MEMBERSHIP",
      columns: {
        paidInFull: {
          title: "Paid in Full",
          price: "$139 ENROLMENT",
          features: [
            "STATE-OF-THE-ART EQUIPMENT",
            "ACCESS TO UNLIMITED GROUP FITNESS CLASSES",
            "WOMEN ONLY SECTION",
            "BOXING AREA, BASKETBALL COURT",
            "SAUNA ROOM, STEAM ROOM",
          ],
        },
        oneYear: {
          title: "1 Year",
          price: "$49 ENROLMENT",
          features: [
            "STATE-OF-THE-ART EQUIPMENT",
            "ACCESS TO UNLIMITED GROUP FITNESS CLASSES",
            "WOMEN ONLY SECTION",
            "BOXING AREA, BASKETBALL COURT",
            "SAUNA ROOM, STEAM ROOM",
          ],
        },
        twoYears: {
          title: "2 Years",
          price: "$139 ENROLMENT",
          features: [
            "STATE-OF-THE-ART EQUIPMENT",
            "ACCESS TO UNLIMITED GROUP FITNESS CLASSES",
            "WOMEN ONLY SECTION",
            "BOXING AREA, BASKETBALL COURT",
            "SAUNA ROOM, STEAM ROOM",
          ],
        },
      },
    },
    platinum: {
      name: "PLATINUM MEMBERSHIP",
      columns: {
        paidInFull: {
          title: "Paid in Full",
          price: "$49 ENROLMENT",
          features: [
            "PLATINUM ROOM ACCESS WITH SPECIAL PANATTA/GYM80 EQUIPMENT",
            "STATE-OF-THE-ART EQUIPMENT",
            "UNLIMITED TANNING ACCESS",
            "INTERNATIONAL GOLD'S GYM ACCESS",
            "ACCESS TO UNLIMITED GROUP FITNESS CLASSES",
            "WOMEN ONLY SECTION",
            "KIDS CLUB",
            "BOXING AREA, BASKETBALL COURT",
            "SAUNA ROOM, STEAM ROOM",
            "TOWEL SERVICE",
          ],
        },
        oneYear: {
          title: "1 Year",
          price: "$49 ENROLMENT",
          features: [
            "PLATINUM ROOM ACCESS WITH SPECIAL PANATTA/GYM80 EQUIPMENT",
            "STATE-OF-THE-ART EQUIPMENT",
            "UNLIMITED TANNING ACCESS",
            "INTERNATIONAL GOLD'S GYM ACCESS",
            "ACCESS TO UNLIMITED GROUP FITNESS CLASSES",
            "WOMEN ONLY SECTION",
            "KIDS CLUB",
            "BOXING AREA, BASKETBALL COURT",
            "SAUNA ROOM, STEAM ROOM",
            "TOWEL SERVICE",
          ],
        },
        twoYears: {
          title: "2 Years",
          price: "$65 ENROLMENT",
          features: [
            "PLATINUM ROOM ACCESS WITH SPECIAL PANATTA/GYM80 EQUIPMENT",
            "STATE-OF-THE-ART EQUIPMENT",
            "UNLIMITED TANNING ACCESS",
            "INTERNATIONAL GOLD'S GYM ACCESS",
            "ACCESS TO UNLIMITED GROUP FITNESS CLASSES",
            "WOMEN ONLY SECTION",
            "KIDS CLUB",
            "BOXING AREA, BASKETBALL COURT",
            "SAUNA ROOM, STEAM ROOM",
            "TOWEL SERVICE",
          ],
        },
      },
    },
    diamond: {
      name: "DIAMOND MEMBERSHIP",
      columns: {
        paidInFull: {
          title: "Paid in Full",
          price: "$49 ENROLMENT FEE",
          features: [
            "UNLIMITED VIRTUAL PERSONAL TRAINING",
            "CUSTOM TRAINING PROGRAMS",
            "UNLIMITED HYROX PROGRAMMING & CLASS ACCESS",
            "CUSTOMIZED NUTRITION & SUPPLEMENT PLANS",
            "VIDEO DEMONSTRATION ON IN-HOUSE EQUIPMENT",
            "PERFORMANCE TRACKING (Apple Health, Fitbit, etc.)",
            "TASK REMINDERS",
            "PLATINUM ROOM ACCESS",
            "STATE-OF-THE-ART EQUIPMENT",
            "24/7 ACCESS",
            "INTERNATIONAL GOLD'S GYM ACCESS",
            "ACCESS TO UNLIMITED GROUP FITNESS CLASSES",
            "WOMEN ONLY SECTION",
            "BOXING AREA, SPIN ROOM",
            "BASKETBALL COURT (SELECT CLUBS)",
            "SAUNA & STEAM ROOM",
            "KIDS CLUB (SELECT CLUBS)",
            "UNLIMITED TANNING",
            "UNLIMITED HYDROMASSAGE SESSIONS",
            "VIP TOWEL SERVICES",
            "*Supports & Recommendations from our Health Specialist",
          ],
        },
        oneYear: {
          title: "1 Year",
          price: "$49 ENROLMENT FEE",
          features: [
            "UNLIMITED VIRTUAL PERSONAL TRAINING",
            "CUSTOM TRAINING PROGRAMS",
            "UNLIMITED HYROX PROGRAMMING & CLASS ACCESS",
            "CUSTOMIZED NUTRITION & SUPPLEMENT PLANS",
            "VIDEO DEMONSTRATION ON IN-HOUSE EQUIPMENT",
            "PERFORMANCE TRACKING (Apple Health, Fitbit, etc.)",
            "TASK REMINDERS",
            "PLATINUM ROOM ACCESS",
            "STATE-OF-THE-ART EQUIPMENT",
            "24/7 ACCESS",
            "INTERNATIONAL GOLD'S GYM ACCESS",
            "ACCESS TO UNLIMITED GROUP FITNESS CLASSES",
            "WOMEN ONLY SECTION",
            "BOXING AREA, SPIN ROOM",
            "BASKETBALL COURT (SELECT CLUBS)",
            "SAUNA & STEAM ROOM",
            "KIDS CLUB (SELECT CLUBS)",
            "UNLIMITED TANNING",
            "UNLIMITED HYDROMASSAGE SESSIONS",
            "VIP TOWEL SERVICES",
            "*Supports & Recommendations from our Health Specialist",
          ],
        },
        twoYears: {
          title: "2 Years",
          price: "$65 ENROLMENT FEE",
          features: [
            "SAME AS 1 YEAR + LONG TERM BENEFITS & DISCOUNTS",
            "LOYALTY BONUS PROGRAM",
            "PRIORITY EVENT INVITES",
          ],
        },
      },
    },
  };

  const currentPlan = plansData[selectedPlan];

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-primary text-white pt-24 pb-20">
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="font-serif text-4xl font-bold text-gold mb-4">
            {currentPlan.name}
          </h2>
        </div>

        {/* 3 Columns */}
        <div className="grid md:grid-cols-3 gap-8">
          {Object.values(currentPlan.columns).map((col: any) => (
            <div
              key={col.title}
              className="bg-black/50 border border-gold rounded-2xl p-6 hover:bg-black/70 transition-all"
            >
              <h3 className="text-2xl font-bold text-gold mb-2 text-center">
                {col.title}
              </h3>
              <p className="text-center text-xl text-ivory font-semibold mb-4">
                {col.price}
              </p>
              <ul className="space-y-2 text-ivory text-left mb-6">
                {col.features.map((feature: string, i: number) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-gold">•</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="mt-12 text-center">
                <button className="bg-gold text-primary font-bold py-3 px-8 rounded-full hover:bg-gold/80 transition">
                  Subscribe
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* 🔙 Botón para volver atrás */}
        <div className="mt-12 text-center">
          <button
            onClick={() => navigate(-1)}
            className="bg-transparent border border-gold text-gold font-bold py-2 px-8 rounded-full hover:bg-gold hover:text-primary transition"
          >
            ← Go Back
          </button>
        </div>
      </div>
    </section>
  );
};

export default PaymentPlans;
