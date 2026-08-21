import { notFound, redirect } from "next/navigation";
import { adminPassword, isAdmin } from "@/lib/admin-auth";
import { leadsConfigured, listLeads, type Lead } from "@/lib/leads";
import { logout, toggleCalled } from "./actions";

/* A lead list is never cacheable — a stale one hides work that needs doing. */
export const dynamic = "force-dynamic";

const dateTime = new Intl.DateTimeFormat("he-IL", {
  timeZone: "Asia/Jerusalem",
  dateStyle: "short",
  timeStyle: "short",
});

export default async function AdminPage() {
  if (!adminPassword()) notFound();
  if (!(await isAdmin())) redirect("/admin/login");

  if (!leadsConfigured()) {
    return (
      <Shell pending={0} total={0}>
        <Notice
          title="מסד הנתונים לא מחובר"
          body="חסר DATABASE_URL. ראו ‎.env.example‎."
        />
      </Shell>
    );
  }

  let leads: Lead[];
  try {
    leads = await listLeads();
  } catch {
    return (
      <Shell pending={0} total={0}>
        <Notice
          title="לא הצלחנו לטעון את הפניות"
          body="ייתכן שפרויקט Supabase מושהה (התוכנית החינמית משהה אחרי שבוע ללא פעילות), או שהטבלה עדיין לא נוצרה — הריצו ‎npm run db:push‎."
        />
      </Shell>
    );
  }

  const pending = leads.filter((lead) => !lead.called).length;

  return (
    <Shell pending={pending} total={leads.length}>
      {leads.length === 0 ? (
        <Notice title="עדיין אין פניות" body="כשמישהו ישאיר טלפון באתר, הוא יופיע כאן." />
      ) : (
        <ul className="grid gap-3">
          {leads.map((lead) => (
            <LeadCard key={lead.id} lead={lead} />
          ))}
        </ul>
      )}
    </Shell>
  );
}

function Shell({
  pending,
  total,
  children,
}: {
  pending: number;
  total: number;
  children: React.ReactNode;
}) {
  return (
    <main className="shell py-8">
      <header className="mb-7 flex flex-wrap items-center gap-x-5 gap-y-3">
        <h1 className="display-3 text-ink">פניות מהאתר</h1>
        {total > 0 && (
          <p className="caption">
            <span className="font-bold text-ink">{pending}</span> ממתינות לטיפול
            מתוך <span className="font-bold text-ink">{total}</span>
          </p>
        )}
        <form action={logout} className="ms-auto">
          <button type="submit" className="btn-quiet min-h-11 text-base">
            יציאה
          </button>
        </form>
      </header>
      {children}
    </main>
  );
}

function Notice({ title, body }: { title: string; body: string }) {
  return (
    <div className="card p-8">
      <p className="font-display text-[1.25rem] font-black text-ink">{title}</p>
      <p className="mt-2 text-ink-soft">{body}</p>
    </div>
  );
}

function LeadCard({ lead }: { lead: Lead }) {
  return (
    <li
      className={`card p-5 sm:p-6 ${lead.called ? "opacity-55" : ""}`}
    >
      <div className="flex flex-wrap items-start gap-x-5 gap-y-3">
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
            <span className="font-display text-[1.25rem] font-black text-ink">
              {lead.name}
            </span>
            <span className="caption">{dateTime.format(new Date(lead.createdAt))}</span>
          </div>

          <a
            href={`tel:${lead.phone}`}
            className="ltr-isolate mt-2 inline-block font-display text-[1.5rem] font-black tracking-[-0.02em] text-green underline-offset-4 hover:underline"
          >
            {lead.phone}
          </a>

          {lead.callHour && (
            <p className="mt-2 text-ink-soft">
              <span className="font-semibold text-ink">שעה נוחה:</span>{" "}
              {lead.callHour}
            </p>
          )}
          {lead.message && (
            <p className="mt-2 max-w-[70ch] text-ink-soft">{lead.message}</p>
          )}
        </div>

        <form action={toggleCalled} className="shrink-0">
          <input type="hidden" name="id" value={lead.id} />
          <input type="hidden" name="called" value={String(!lead.called)} />
          <button
            type="submit"
            className={`min-h-11 text-base ${lead.called ? "btn-quiet" : "btn"}`}
          >
            {lead.called ? "החזירו לטיפול" : "סמנו כטופל"}
          </button>
        </form>
      </div>
    </li>
  );
}
