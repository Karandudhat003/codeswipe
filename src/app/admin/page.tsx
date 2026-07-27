"use client";
import { useEffect, useState } from "react";
import { PageShell } from "@/components/site/PageShell";
import { Mail, MessageSquare, RefreshCw } from "lucide-react";

type ContactDoc = {
  _id: string;
  name: string;
  email: string;
  company?: string;
  building?: string[];
  projectDetails?: string;
  createdAt: string;
};

type NewsletterDoc = {
  _id: string;
  email: string;
  createdAt: string;
};

export default function AdminPage() {
  const [contacts, setContacts] = useState<ContactDoc[]>([]);
  const [newsletters, setNewsletters] = useState<NewsletterDoc[]>([]);
  const [activeTab, setActiveTab] = useState<"contacts" | "newsletters">("contacts");
  const [loading, setLoading] = useState(true);

  const fetchData = () => {
    setLoading(true);
    fetch("/api/admin/contacts")
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setContacts(data.data || []);
          setNewsletters(data.newsletters || []);
        }
        setLoading(false);
      })
      .catch(() => setLoading(false));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <PageShell hideCta>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-display font-semibold">Admin Dashboard</h1>
            <p className="text-sm text-muted-foreground mt-1">Manage contact inquiries & newsletter subscriptions</p>
          </div>
          <button
            onClick={fetchData}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-xs font-medium hover:bg-accent transition self-start sm:self-auto"
          >
            <RefreshCw className={`h-3.5 w-3.5 ${loading ? "animate-spin" : ""}`} /> Refresh
          </button>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 border-b border-border mb-6">
          <button
            onClick={() => setActiveTab("contacts")}
            className={`flex items-center gap-2 px-5 py-3 text-sm font-medium border-b-2 transition ${
              activeTab === "contacts"
                ? "border-primary text-primary"
                : "border-transparent text-muted-foreground hover:text-foreground"
            }`}
          >
            <MessageSquare className="h-4 w-4" />
            Contact Submissions ({contacts.length})
          </button>
          <button
            onClick={() => setActiveTab("newsletters")}
            className={`flex items-center gap-2 px-5 py-3 text-sm font-medium border-b-2 transition ${
              activeTab === "newsletters"
                ? "border-primary text-primary"
                : "border-transparent text-muted-foreground hover:text-foreground"
            }`}
          >
            <Mail className="h-4 w-4" />
            Newsletter Subscribers ({newsletters.length})
          </button>
        </div>

        {loading ? (
          <div className="p-12 text-center text-muted-foreground">Loading submissions...</div>
        ) : activeTab === "contacts" ? (
          <div className="overflow-x-auto rounded-2xl border border-border bg-card shadow-card">
            <table className="w-full text-left text-sm text-muted-foreground">
              <thead className="border-b border-border bg-muted/50 text-xs uppercase text-foreground">
                <tr>
                  <th className="px-6 py-4">Date</th>
                  <th className="px-6 py-4">Name / Email</th>
                  <th className="px-6 py-4">Company</th>
                  <th className="px-6 py-4">Services</th>
                  <th className="px-6 py-4">Details</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {contacts.map((c) => (
                  <tr key={c._id || c.email + c.createdAt} className="hover:bg-muted/30">
                    <td className="px-6 py-4 whitespace-nowrap text-xs">
                      {c.createdAt ? new Date(c.createdAt).toLocaleString() : "-"}
                    </td>
                    <td className="px-6 py-4">
                      <div className="font-medium text-foreground">{c.name}</div>
                      <div className="text-xs text-muted-foreground">{c.email}</div>
                    </td>
                    <td className="px-6 py-4">{c.company || "-"}</td>
                    <td className="px-6 py-4">
                      {(c.building || []).map((b) => (
                        <span
                          key={b}
                          className="inline-block mr-1 mb-1 rounded-full bg-accent px-2 py-0.5 text-[10px] font-medium text-primary"
                        >
                          {b}
                        </span>
                      ))}
                    </td>
                    <td className="px-6 py-4 max-w-xs truncate" title={c.projectDetails}>
                      {c.projectDetails || "-"}
                    </td>
                  </tr>
                ))}
                {contacts.length === 0 && (
                  <tr>
                    <td colSpan={5} className="px-6 py-12 text-center text-muted-foreground">
                      No contact submissions yet.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="overflow-x-auto rounded-2xl border border-border bg-card shadow-card">
            <table className="w-full text-left text-sm text-muted-foreground">
              <thead className="border-b border-border bg-muted/50 text-xs uppercase text-foreground">
                <tr>
                  <th className="px-6 py-4">#</th>
                  <th className="px-6 py-4">Email Address</th>
                  <th className="px-6 py-4">Subscribed Date</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {newsletters.map((n, idx) => (
                  <tr key={n._id || n.email} className="hover:bg-muted/30">
                    <td className="px-6 py-4 text-xs font-mono">{idx + 1}</td>
                    <td className="px-6 py-4 font-medium text-foreground">{n.email}</td>
                    <td className="px-6 py-4 text-xs">
                      {n.createdAt ? new Date(n.createdAt).toLocaleString() : "-"}
                    </td>
                  </tr>
                ))}
                {newsletters.length === 0 && (
                  <tr>
                    <td colSpan={3} className="px-6 py-12 text-center text-muted-foreground">
                      No newsletter subscribers yet.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </PageShell>
  );
}
