import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Heading, Text, Eyebrow } from '../../packages/react/src'

const meta: Meta = {
  title: 'Foundations/Type scale',
  parameters: { layout: 'padded' },
}
export default meta

const Row = ({ role, spec, children }: { role: string; spec: string; children: React.ReactNode }) => (
  <div style={{ display: 'grid', gridTemplateColumns: '120px 1fr', gap: 24, padding: '18px 0', borderBottom: '1px dashed var(--pom-border)', alignItems: 'baseline' }}>
    <div>
      <Eyebrow>{role}</Eyebrow>
      <Text variant="caption" style={{ marginTop: 4 }}>{spec}</Text>
    </div>
    <div>{children}</div>
  </div>
)

/** Every page uses these ten roles. Modelled on codepom.io's MVP Build page. */
export const Scale: StoryObj = {
  render: () => (
    <div style={{ maxWidth: 900 }}>
      <Row role="page" spec="36–64px · 500 · 1.02"><Heading level={1}>Constructor de MVP Interactivo</Heading></Row>
      <Row role="title" spec="20px · 600 · 1.3"><Heading level={2}>Build completo</Heading></Row>
      <Row role="item" spec="15px · 500 · 1.5"><Heading level={3}>Aplicación Web</Heading></Row>
      <Row role="stat" spec="28px · 600 · 1"><Text variant="stat" tone="accent">$21,500 – $29,025</Text></Row>
      <Row role="lead" spec="19px · 1.5"><Text variant="lead">Selecciona los bloques que necesitas para tu prototipo. Nuestro sistema calcula el precio estimado en tiempo real.</Text></Row>
      <Row role="body" spec="15px · 1.6"><Text>Validamos tu hipótesis antes de escribir una línea de código: investigación, entrevistas y un contrato de una página.</Text></Row>
      <Row role="small" spec="11.5px · 1.4"><Text variant="small">SSO, roles, magic links</Text></Row>
      <Row role="label" spec="mono 11px · 0.06em"><Eyebrow>§ MVP / constructor_blueprint</Eyebrow></Row>
      <Row role="label sm" spec="mono 10.5px"><Eyebrow size="sm">02 · Plataformas objetivo</Eyebrow></Row>
      <Row role="caption" spec="mono 10.5px · 1.5"><Text variant="caption">Base: ~4w · $15k</Text></Row>
      <Row role="mono" spec="mono 12px · 1.55"><Text variant="mono" tone="tertiary">← codepom / inicio</Text></Row>
    </div>
  ),
}
