import { createFileRoute } from '@tanstack/react-router'
import { z } from 'zod'

import { useAppForm } from '#/hooks/demo.form'

export const Route = createFileRoute('/demo/form/simple')({
  component: SimpleForm,
})

const schema = z.object({
  title: z.string().min(1, 'Title is required'),
  description: z.string().min(1, 'Description is required'),
})

function SimpleForm() {
  const form = useAppForm({
    defaultValues: {
      title: '',
      description: '',
    },
    validators: {
      onBlur: schema,
    },
    onSubmit: ({ value }) => {
      console.log(value)
      // Show success message
      alert('Form submitted successfully!')
    },
  })

  return (
    <main className="px-4 py-10 sm:py-16">
      <div className="mx-auto w-full max-w-3xl">
        <div className="mb-6">
          <p className="eyebrow mb-3">Simple Form</p>
          <h1 className="display-title text-4xl font-bold text-[var(--color-text)]">
            Basic content capture
          </h1>
          <p className="mt-3 max-w-2xl text-[var(--color-text-soft)]">
            Superficie oscura, acento naranja y componentes alineados a una
            interfaz más sobria y técnica.
          </p>
        </div>
        <div className="panel rounded-[1.75rem] p-6 sm:p-8">
          <form
            onSubmit={(e) => {
              e.preventDefault()
              e.stopPropagation()
              form.handleSubmit()
            }}
            className="space-y-6"
          >
            <form.AppField name="title">
              {(field) => <field.TextField label="Title" />}
            </form.AppField>

            <form.AppField name="description">
              {(field) => <field.TextArea label="Description" />}
            </form.AppField>

            <div className="flex justify-end">
              <form.AppForm>
                <form.SubscribeButton label="Submit" />
              </form.AppForm>
            </div>
          </form>
        </div>
      </div>
    </main>
  )
}
