import { defineCollection, z } from 'astro:content';

const staff = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    title: z.string(),
    department: z.string().optional(),
    photo: z.string().optional(),
    order: z.number().default(100),
  }),
});

const books = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string(),
    cover: z.string(),
    author: z.string().optional(),
  }),
});

const announcements = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    variant: z.enum(['tip', 'warning', 'info']).default('info'),
    link: z.string().optional(),
    linkText: z.string().optional(),
    publishDate: z.date(),
    expires: z.date().optional(),
  }),
});

const site = defineCollection({
  type: 'data',
  schema: z.object({
    schoolYear: z.string(),
    principal: z.string(),
    phone: z.string(),
    fax: z.string(),
    email: z.string(),
    givingEmail: z.string(),
    address: z.object({
      street: z.string(),
      city: z.string(),
      state: z.string(),
      zip: z.string(),
    }),
    officeHours: z.object({
      school: z.string(),
      summer: z.string(),
    }),
    externalLinks: z.object({
      sycamore: z.string().url(),
      sycamoreAdmissions: z.string().url(),
      efunds: z.string().url(),
      facebook: z.string().url(),
    }),
    tuitionRows: z.array(
      z.object({
        grade: z.string(),
        schedule: z.string(),
        annualTotal: z.string(),
        registrationFee: z.string(),
      })
    ),
    quickFacts: z.array(
      z.object({
        label: z.string(),
        value: z.string(),
      })
    ),
  }),
});

export const collections = { staff, books, announcements, site };
