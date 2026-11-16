CREATE TABLE inquiries (
 id TEXT PRIMARY KEY,
 name TEXT NOT NULL,
 restaurant TEXT NOT NULL,
 email TEXT NOT NULL,
 phone TEXT NOT NULL DEFAULT '',
 needs TEXT NOT NULL,
 created_at INTEGER NOT NULL,
 support_sent INTEGER NOT NULL DEFAULT 0,
 confirmation_sent INTEGER NOT NULL DEFAULT 0,
 attempts INTEGER NOT NULL DEFAULT 0,
 lease_until INTEGER NOT NULL DEFAULT 0
);
CREATE INDEX inquiries_pending ON inquiries(confirmation_sent, support_sent, attempts);
CREATE TABLE rate_limits (key TEXT PRIMARY KEY, count INTEGER NOT NULL, expires_at INTEGER NOT NULL);
