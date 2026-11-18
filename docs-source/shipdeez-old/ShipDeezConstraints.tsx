export default function ShipDeezConstraints() {
  const constraints = [
    {
      label: 'Hard Deadline',
      description: '10 business days. Contractual, not aspirational. The platform activates March 1 with or without a complete UX.'
    },
    {
      label: 'Three-Platform Stack',
      description: 'ShipDeez runs on EasyPost, ShipBlink, and Forge. Every design decision had to work within what these platforms could actually do in v1.'
    },
    {
      label: 'No Custom Backend',
      description: 'Designs had to operate within existing API capabilities. Server-side development was out of scope.'
    },
    {
      label: 'Two User Types',
      description: 'A casual shipper who needs one label right now, and a regular shipper who needs a dashboard and saved addresses. These users have almost nothing in common.'
    },
    {
      label: 'Brand From Scratch',
      description: 'No existing identity. Color, typography, tone, component library — all built alongside the product.'
    },
    {
      label: 'Wallet-Based Billing',
      description: 'EasyPost uses pre-funded wallets. Most shipping tools don\'t have to design for insufficient funds, failed charges, or mid-payment abandonment. We did.'
    }
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {constraints.map((constraint) => (
        <div
          key={constraint.label}
          className="bg-white border border-[#E5E5E5] rounded-xl p-5 hover:shadow-sm transition-shadow duration-200"
        >
          <h4 className="text-[14px] font-bold text-[#1A1A1A] mb-2">
            {constraint.label}
          </h4>
          <p className="text-[13px] text-[#555555] leading-relaxed">
            {constraint.description}
          </p>
        </div>
      ))}
    </div>
  )
}
