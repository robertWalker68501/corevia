import {
  ArrowRight,
  BarChart3,
  Building2,
  Check,
  CircleDollarSign,
  PackageCheck,
  ShieldCheck,
  Sparkles,
  Truck,
  Users,
  Warehouse,
} from 'lucide-react';
import Link from 'next/link';

import { buttonVariants } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FEATURES, BENEFITS, METRICS, ACTIVITY } from '@/constants';

export default function Home() {
  return (
    <main className='page-wrapper overflow-hidden'>
      <section
        id='main'
        className='relative border-b'
      >
        <div className='absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,hsl(var(--primary)/0.12),transparent_38%),radial-gradient(circle_at_80%_25%,hsl(var(--primary)/0.08),transparent_30%)]' />

        <div className='mx-auto grid max-w-7xl gap-14 px-6 py-20 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:px-8 lg:py-28'>
          <div className='max-w-2xl'>
            <div className='bg-background/80 text-muted-foreground mb-6 inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-sm shadow-sm backdrop-blur'>
              <Sparkles className='text-primary size-4' />
              One platform for connected business operations
            </div>

            <h1 className='font-heading text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl'>
              Bring your customers and supply chain together.
            </h1>

            <p className='text-muted-foreground mt-6 max-w-xl text-lg leading-8'>
              Corevia gives growing businesses one clear system for managing
              customers, suppliers, inventory, orders, warehouses, and daily
              operations.
            </p>

            <div className='mt-8 flex flex-col gap-3 sm:flex-row'>
              <Link
                href='/register'
                className={buttonVariants({ size: 'lg' })}
              >
                Get started
                <ArrowRight className='size-4' />
              </Link>

              <Link
                href='#features'
                className={buttonVariants({ variant: 'outline', size: 'lg' })}
              >
                Explore features
              </Link>
            </div>

            <div className='text-muted-foreground mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm'>
              <span className='inline-flex items-center gap-2'>
                <Check className='text-primary size-4' />
                No credit card required
              </span>
              <span className='inline-flex items-center gap-2'>
                <Check className='text-primary size-4' />
                Fast guided setup
              </span>
              <span className='inline-flex items-center gap-2'>
                <Check className='text-primary size-4' />
                Built for growing teams
              </span>
            </div>
          </div>

          <div className='relative'>
            <div className='bg-primary/10 absolute -inset-8 -z-10 rounded-full blur-3xl' />

            <div className='bg-card/95 shadow-primary/10 rounded-2xl border p-3 shadow-2xl backdrop-blur'>
              <div className='flex items-center justify-between border-b px-3 py-3'>
                <div>
                  <p className='text-sm font-medium'>Operations overview</p>
                  <p className='text-muted-foreground text-xs'>
                    Real-time business performance
                  </p>
                </div>

                <div className='bg-background text-muted-foreground flex items-center gap-2 rounded-md border px-2.5 py-1.5 text-xs'>
                  <span className='size-2 rounded-full bg-emerald-500' />
                  Live
                </div>
              </div>

              <div className='grid gap-3 p-3 sm:grid-cols-3'>
                {METRICS.map((metric) => (
                  <Card
                    key={metric.label}
                    className='shadow-none'
                  >
                    <CardContent className='p-4'>
                      <p className='text-muted-foreground text-xs'>
                        {metric.label}
                      </p>
                      <div className='mt-2 flex items-end justify-between gap-3'>
                        <p className='text-xl font-semibold'>{metric.value}</p>
                        <span className='text-xs font-medium text-emerald-600 dark:text-emerald-400'>
                          {metric.trend}
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className='grid gap-3 px-3 pb-3 lg:grid-cols-[1.4fr_0.9fr]'>
                <Card className='shadow-none'>
                  <CardHeader className='pb-3'>
                    <div className='flex items-center justify-between'>
                      <div>
                        <CardTitle className='text-sm'>Order volume</CardTitle>
                        <p className='text-muted-foreground mt-1 text-xs'>
                          Last 7 days
                        </p>
                      </div>
                      <BarChart3 className='text-muted-foreground size-4' />
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className='flex h-40 items-end gap-2'>
                      {[38, 55, 44, 72, 62, 86, 76].map((height, index) => (
                        <div
                          key={index}
                          className='flex flex-1 flex-col justify-end'
                        >
                          <div
                            className='bg-primary/80 w-full rounded-t'
                            style={{ height: `${height}%` }}
                          />
                        </div>
                      ))}
                    </div>
                    <div className='text-muted-foreground mt-3 flex justify-between text-[10px]'>
                      <span>Mon</span>
                      <span>Tue</span>
                      <span>Wed</span>
                      <span>Thu</span>
                      <span>Fri</span>
                      <span>Sat</span>
                      <span>Sun</span>
                    </div>
                  </CardContent>
                </Card>

                <Card className='shadow-none'>
                  <CardHeader className='pb-3'>
                    <CardTitle className='text-sm'>Recent activity</CardTitle>
                  </CardHeader>
                  <CardContent className='space-y-4'>
                    {ACTIVITY.map((item) => (
                      <div
                        key={item.title}
                        className='flex gap-3'
                      >
                        <div className='bg-primary/10 mt-1 flex size-7 shrink-0 items-center justify-center rounded-full'>
                          <PackageCheck className='text-primary size-3.5' />
                        </div>
                        <div className='min-w-0'>
                          <p className='truncate text-xs font-medium'>
                            {item.title}
                          </p>
                          <p className='text-muted-foreground mt-0.5 truncate text-[11px]'>
                            {item.detail}
                          </p>
                          <p className='text-muted-foreground mt-1 text-[10px]'>
                            {item.time}
                          </p>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className='bg-card absolute -bottom-6 -left-5 hidden w-56 rounded-xl border p-4 shadow-xl md:block'>
              <div className='flex items-center gap-3'>
                <div className='bg-primary/10 flex size-10 items-center justify-center rounded-lg'>
                  <CircleDollarSign className='text-primary size-5' />
                </div>
                <div>
                  <p className='text-muted-foreground text-xs'>
                    Monthly revenue
                  </p>
                  <p className='text-lg font-semibold'>$184,320</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='bg-muted/30 border-b'>
        <div className='mx-auto max-w-7xl px-6 py-10 lg:px-8'>
          <p className='text-muted-foreground text-center text-sm font-medium'>
            Built for modern manufacturers, distributors, wholesalers, and
            multi-location businesses
          </p>

          <div className='mt-8 grid grid-cols-2 gap-6 text-center sm:grid-cols-4'>
            {['Manufacturing', 'Distribution', 'Wholesale', 'Logistics'].map(
              (industry) => (
                <div
                  key={industry}
                  className='text-foreground/70 flex items-center justify-center gap-2 text-sm font-semibold'
                >
                  <Building2 className='text-primary size-4' />
                  {industry}
                </div>
              )
            )}
          </div>
        </div>
      </section>

      <section
        id='features'
        className='mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28'
      >
        <div className='max-w-2xl'>
          <p className='text-primary text-sm font-semibold tracking-[0.18em] uppercase'>
            Connected operations
          </p>
          <h2 className='font-heading mt-3 text-3xl font-semibold tracking-tight sm:text-4xl'>
            Everything your business needs to move forward.
          </h2>
          <p className='text-muted-foreground mt-4 text-lg leading-8'>
            Replace scattered tools and disconnected workflows with one platform
            built around your customers and supply chain.
          </p>
        </div>

        <div className='mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3'>
          {FEATURES.map((feature) => {
            const Icon = feature.icon;

            return (
              <Card
                key={feature.title}
                className='group hover:border-primary/40 transition-colors'
              >
                <CardHeader>
                  <div className='bg-primary/10 group-hover:bg-primary group-hover:text-primary-foreground mb-3 flex size-11 items-center justify-center rounded-xl transition-colors'>
                    <Icon className='size-5' />
                  </div>
                  <CardTitle className='font-heading text-xl'>
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className='text-muted-foreground leading-7'>
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      <section className='bg-muted/30 border-y'>
        <div className='mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-2 lg:items-center lg:px-8 lg:py-28'>
          <div>
            <p className='text-primary text-sm font-semibold tracking-[0.18em] uppercase'>
              One source of truth
            </p>
            <h2 className='font-heading mt-3 text-3xl font-semibold tracking-tight sm:text-4xl'>
              See the full picture of your business.
            </h2>
            <p className='text-muted-foreground mt-5 text-lg leading-8'>
              Corevia connects customer demand with purchasing, inventory,
              warehouse activity, and fulfillment so your teams can make better
              decisions with complete context.
            </p>

            <div className='mt-8 space-y-4'>
              {BENEFITS.map((benefit) => (
                <div
                  key={benefit}
                  className='flex gap-3'
                >
                  <div className='bg-primary/10 mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full'>
                    <Check className='text-primary size-3.5' />
                  </div>
                  <p className='text-sm leading-6'>{benefit}</p>
                </div>
              ))}
            </div>
          </div>

          <div className='grid gap-4 sm:grid-cols-2'>
            <Card className='sm:translate-y-8'>
              <CardHeader>
                <div className='bg-primary/10 flex size-10 items-center justify-center rounded-lg'>
                  <Users className='text-primary size-5' />
                </div>
                <CardTitle className='font-heading text-lg'>
                  Customer demand
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className='text-muted-foreground text-sm leading-6'>
                  Understand sales activity, open orders, buying patterns, and
                  customer needs.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className='bg-primary/10 flex size-10 items-center justify-center rounded-lg'>
                  <Truck className='text-primary size-5' />
                </div>
                <CardTitle className='font-heading text-lg'>
                  Supplier network
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className='text-muted-foreground text-sm leading-6'>
                  Monitor supplier performance, costs, purchase orders, and
                  expected deliveries.
                </p>
              </CardContent>
            </Card>

            <Card className='sm:translate-y-8'>
              <CardHeader>
                <div className='bg-primary/10 flex size-10 items-center justify-center rounded-lg'>
                  <Warehouse className='text-primary size-5' />
                </div>
                <CardTitle className='font-heading text-lg'>
                  Inventory flow
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className='text-muted-foreground text-sm leading-6'>
                  Track available, reserved, incoming, and transferred inventory
                  across locations.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className='bg-primary/10 flex size-10 items-center justify-center rounded-lg'>
                  <PackageCheck className='text-primary size-5' />
                </div>
                <CardTitle className='font-heading text-lg'>
                  Order fulfillment
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className='text-muted-foreground text-sm leading-6'>
                  Keep every order moving from confirmation through shipment and
                  delivery.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className='mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28'>
        <div className='grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center'>
          <div className='bg-card shadow-primary/5 rounded-2xl border p-5 shadow-xl'>
            <div className='mb-5 flex items-center justify-between'>
              <div>
                <p className='font-heading font-semibold'>Inventory health</p>
                <p className='text-muted-foreground text-sm'>
                  Stock status by category
                </p>
              </div>
              <ShieldCheck className='text-primary size-5' />
            </div>

            <div className='space-y-5'>
              {[
                { label: 'Raw materials', value: 86 },
                { label: 'Finished goods', value: 72 },
                { label: 'Packaging', value: 91 },
                { label: 'Components', value: 64 },
              ].map((item) => (
                <div key={item.label}>
                  <div className='mb-2 flex items-center justify-between text-sm'>
                    <span>{item.label}</span>
                    <span className='font-medium'>{item.value}%</span>
                  </div>
                  <div className='bg-muted h-2 overflow-hidden rounded-full'>
                    <div
                      className='bg-primary h-full rounded-full'
                      style={{ width: `${item.value}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <p className='text-primary text-sm font-semibold tracking-[0.18em] uppercase'>
              Clearer decisions
            </p>
            <h2 className='font-heading mt-3 text-3xl font-semibold tracking-tight sm:text-4xl'>
              Turn operational data into confident action.
            </h2>
            <p className='text-muted-foreground mt-5 text-lg leading-8'>
              Stay ahead of shortages, delays, and changing demand with live
              dashboards and reports designed for everyday decision-making.
            </p>

            <div className='mt-8 grid gap-6 sm:grid-cols-2'>
              <div>
                <p className='text-3xl font-semibold'>99.9%</p>
                <p className='text-muted-foreground mt-1 text-sm'>
                  Platform availability target
                </p>
              </div>
              <div>
                <p className='text-3xl font-semibold'>24/7</p>
                <p className='text-muted-foreground mt-1 text-sm'>
                  Access to current business data
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='px-6 pb-20 lg:px-8 lg:pb-28'>
        <div className='bg-primary text-primary-foreground shadow-primary/20 relative mx-auto max-w-7xl overflow-hidden rounded-3xl border px-6 py-14 shadow-2xl sm:px-10 lg:px-16'>
          <div className='border-primary-foreground/10 absolute -top-24 -right-24 size-72 rounded-full border' />
          <div className='border-primary-foreground/10 absolute right-16 -bottom-32 size-72 rounded-full border' />

          <div className='relative max-w-2xl'>
            <p className='text-primary-foreground/70 text-sm font-semibold tracking-[0.18em] uppercase'>
              Start building a connected business
            </p>
            <h2 className='font-heading mt-3 text-3xl font-semibold tracking-tight sm:text-4xl'>
              Simplify operations without slowing down growth.
            </h2>
            <p className='text-primary-foreground/80 mt-5 text-lg leading-8'>
              Bring your teams, customers, suppliers, inventory, and orders
              together in Corevia.
            </p>

            <div className='mt-8 flex flex-col gap-3 sm:flex-row'>
              <Link
                href='/register'
                className={buttonVariants({ variant: 'secondary', size: 'lg' })}
              >
                Get started
                <ArrowRight className='size-4' />
              </Link>

              <Link
                href='/contact'
                className={`${buttonVariants({ variant: 'outline', size: 'lg' })} border-primary-foreground/25 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground bg-transparent`}
              >
                Talk to sales
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
