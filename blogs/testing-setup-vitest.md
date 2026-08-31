---
title: "🧪 Daily Wick Testing Setup & Example"
date: "2025-02-28"
excerpt: "Complete testing setup for React applications with Vitest, Testing Library, and real-world examples from a trading journal application."
tags: ["Testing", "React", "Vitest", "TDD", "JavaScript", "TypeScript"]
author: "Billie Heidelberg Jr."
readingTime: 8
coverImage: "/blogs/testing-setup-cover.svg"
lastUpdated: "2025-02-28"
---

## 🧪 Daily Wick Testing Setup & Example

### 📦 **What We Installed**

```bash
npm install -D vitest @testing-library/react @testing-library/jest-dom @testing-library/user-event jsdom @vitejs/plugin-react
```

**Why each package:**
- **vitest** - Fast test runner (Jest-compatible but faster)
- **@testing-library/react** - React component testing utilities
- **@testing-library/jest-dom** - Custom DOM matchers (`.toBeVisible()`, `.toHaveText()`)
- **@testing-library/user-event** - Simulate user interactions (click, type)
- **jsdom** - Browser environment simulation for Node.js
- **@vitejs/plugin-react** - React support for Vitest

### ⚙️ **Configuration Setup**

**vitest.config.ts:**
```typescript
import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],                    // React support
  test: {
    globals: true,                       // Use describe/it without imports
    environment: 'jsdom',                // Browser simulation
    setupFiles: ['./test/setup.ts'],     // Global test setup
    css: true,                           // CSS support
  },
  resolve: {
    alias: { '@': resolve(__dirname, './') }, // Path aliases
  },
})
```

**test/setup.ts - Global Mocks:**
```typescript
import '@testing-library/jest-dom'
import { vi } from 'vitest'

// Mock Next.js router so tests don't break
vi.mock('next/navigation', () => ({
  useRouter: () => ({ push: vi.fn(), replace: vi.fn() }),
  useSearchParams: () => new URLSearchParams(),
  usePathname: () => '/',
}))

// Mock Supabase to avoid real database calls
vi.mock('@/lib/supabase', () => ({
  supabase: {
    auth: { getSession: vi.fn(), getUser: vi.fn() },
    from: vi.fn(() => ({ select: vi.fn(), eq: vi.fn() })),
  },
}))
```

### 🎯 **Real Test Example: Trade Calculations**

Here's one of our actual tests with detailed breakdown:

```typescript
// test/lib/tradeCalculations.test.ts
import { describe, it, expect } from 'vitest'
import { calculatePnL, formatPnL, calculatePnLPercent } from '@/lib/tradeCalculations'
import type { Trade } from '@/types'

describe('Trade Calculations', () => {
  describe('calculatePnL', () => {
    it('should calculate profit for long trades', () => {
      // Arrange: Create test trade data
      const trade: Partial<Trade> = {
        trade_direction: 'Long',
        entry_price: 100,
        exit_price: 110,
        position_size: 10
      }
      
      // Act: Call the function we're testing
      const result = calculatePnL(trade as Trade)
      
      // Assert: Check the result is what we expect
      expect(result).toBe(100) // (110 - 100) * 10 = 100
    })

    it('should calculate loss for long trades', () => {
      // Arrange: Loss scenario
      const trade: Partial<Trade> = {
        trade_direction: 'Long',
        entry_price: 100,
        exit_price: 90,  // Sold for less
        position_size: 10
      }
      
      // Act
      const result = calculatePnL(trade as Trade)
      
      // Assert: Should be negative
      expect(result).toBe(-100) // (90 - 100) * 10 = -100
    })

    it('should return null for open trades', () => {
      // Arrange: Trade without exit price
      const trade: Partial<Trade> = {
        trade_direction: 'Long',
        entry_price: 100,
        exit_price: null,  // No exit yet
        position_size: 10
      }
      
      // Act
      const result = calculatePnL(trade as Trade)
      
      // Assert: Can't calculate P&L without exit
      expect(result).toBeNull()
    })
  })
})
```

### 🔍 **How This Test Works**

1. **Arrange Phase:**
   - Create mock trade data
   - Set up specific scenarios (profit, loss, open trade)
   - Use `Partial<Trade>` to only specify needed fields

2. **Act Phase:**
   - Call the actual function `calculatePnL()`
   - Pass in our test data

3. **Assert Phase:**
   - Use `expect()` to check results
   - `toBe(100)` - Exact value match
   - `toBeNull()` - Check for null returns
   - Comments show the math: `(110 - 100) * 10 = 100` 

### 🚨 **TDD in Action - Real Example**

**1. We Wrote Test First:**
```typescript
it('should handle zero position size', () => {
  const trade: Partial<Trade> = {
    trade_direction: 'Long',
    entry_price: 100,
    exit_price: 110,
    position_size: 0  // Edge case!
  }
  
  const result = calculatePnL(trade as Trade)
  expect(result).toBe(0) // Expected: 0 shares = 0 profit
})
```

**2. Test Failed:**
```
❌ expected 0 but received null
```

**3. We Fixed Implementation:**
```typescript
// BEFORE (returned null for 0 position)
if (!trade.exit_price || !trade.position_size) return null;

// AFTER (handle 0 as valid case)
if (!trade.exit_price || trade.position_size === null) return null;
if (trade.position_size === 0) return 0;  // NEW!
```

**4. Test Passed:**
```
✅ should handle zero position size
```

### 🏃‍♂️ **How to Run Tests**

```bash
# Development - watch mode
npm run test
# → Watches for file changes, re-runs tests

# CI/CD - single run
npm run test:run
# → Runs all tests once, exits with status code

# Visual interface
npm run test:ui
# → Opens browser with test UI, coverage, etc.

# Coverage report
npm run test:coverage
# → Shows % of code covered by tests
```

### 🎯 **Why This Testing Approach**

**Benefits for Trading App:**
- **Financial Accuracy** - P&L calculations must be perfect
- **Edge Case Protection** - Zero values, null values, negative numbers
- **Regression Safety** - Future changes won't break existing logic
- **Documentation** - Tests show exactly how functions should behave

**TDD Benefits:**
- **Think First** - Define behavior before coding
- **Confidence** - Tests prove code works
- **Refactor Safety** - Can improve code without breaking functionality

### 🧪 **Component Testing Example**

Here's how we test a React component:

```typescript
// test/components/TradeCard.test.tsx
import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { TradeCard } from '@/components/TradeCard'

describe('TradeCard Component', () => {
  it('should display trade information correctly', () => {
    // Arrange
    const trade = {
      id: '1',
      symbol: 'AAPL',
      entry_price: 150,
      exit_price: 160,
      position_size: 100,
      trade_direction: 'Long' as const,
      created_at: '2025-01-15T10:00:00Z'
    }

    // Act
    render(<TradeCard trade={trade} />)

    // Assert
    expect(screen.getByText('AAPL')).toBeInTheDocument()
    expect(screen.getByText('$150.00')).toBeInTheDocument()
    expect(screen.getByText('$160.00')).toBeInTheDocument()
    expect(screen.getByText('Long')).toBeInTheDocument()
  })

  it('should handle delete button click', async () => {
    // Arrange
    const mockOnDelete = vi.fn()
    const trade = {
      id: '1',
      symbol: 'AAPL',
      entry_price: 150,
      exit_price: 160,
      position_size: 100,
      trade_direction: 'Long' as const,
      created_at: '2025-01-15T10:00:00Z'
    }
    const user = userEvent.setup()

    // Act
    render(<TradeCard trade={trade} onDelete={mockOnDelete} />)
    await user.click(screen.getByRole('button', { name: /delete/i }))

    // Assert
    expect(mockOnDelete).toHaveBeenCalledWith('1')
  })
})
```

### 📊 **Integration Testing Example**

Testing how components work together:

```typescript
// test/integration/TradeJournal.test.tsx
import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { TradeJournal } from '@/components/TradeJournal'

// Mock the API calls
vi.mock('@/lib/api', () => ({
  getTrades: vi.fn(() => Promise.resolve([])),
  createTrade: vi.fn(() => Promise.resolve({ id: '1' })),
}))

describe('TradeJournal Integration', () => {
  it('should allow adding a new trade', async () => {
    // Arrange
    const user = userEvent.setup()
    render(<TradeJournal />)

    // Act - Fill out the form
    await user.type(screen.getByLabelText(/symbol/i), 'AAPL')
    await user.type(screen.getByLabelText(/entry price/i), '150')
    await user.type(screen.getByLabelText(/exit price/i), '160')
    await user.type(screen.getByLabelText(/position size/i), '100')
    await user.click(screen.getByRole('button', { name: /add trade/i }))

    // Assert - Trade should appear in the list
    expect(screen.getByText('AAPL')).toBeInTheDocument()
    expect(screen.getByText('$150.00')).toBeInTheDocument()
  })
})
```

### 🎯 **Best Practices We Follow**

1. **Test Behavior, Not Implementation**
   ```typescript
   // Good - Test what user sees
   expect(screen.getByText('Total: $100')).toBeInTheDocument()
   
   // Bad - Test internal state
   expect(component.state.total).toBe(100)
   ```

2. **Use Meaningful Test Names**
   ```typescript
   it('should calculate profit for long trades') // Clear
   it('test1') // Not helpful
   ```

3. **One Assertion Per Test (When Possible)**
   ```typescript
   it('should display symbol', () => {
     expect(screen.getByText('AAPL')).toBeInTheDocument()
   })
   
   it('should display entry price', () => {
     expect(screen.getByText('$150.00')).toBeInTheDocument()
   })
   ```

4. **Mock External Dependencies**
   ```typescript
   // Always mock APIs, databases, external services
   vi.mock('@/lib/supabase', () => ({
     supabase: { /* mock implementation */ }
   }))
   ```

This testing setup ensures our trading journal's financial calculations are bulletproof and our UI works as expected! 🎯
