import AnchorNav from './AnchorNav'

export default function ShipDeezAnchorNav() {
  const items = [
    { label: 'Problem', href: '#problem' },
    { label: 'Constraints', href: '#constraints' },
    { label: 'Design Decisions', href: '#decisions' },
    { label: 'Screens', href: '#screens' },
    { label: 'System', href: '#system' },
    { label: 'Results', href: '#results' },
  ]

  return <AnchorNav items={items} />
}
