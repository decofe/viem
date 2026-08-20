import { tempoModerato } from 'viem/chains'
import { Addresses as TempoAddresses } from 'viem/tempo'
import { Addresses, zoneModerato } from 'viem/tempo/zones'
import { expectTypeOf, test } from 'vitest'

test('exposes Zone E contracts', () => {
  const contracts = zoneModerato(1).contracts

  expectTypeOf(
    Addresses.messenger[tempoModerato.id][1],
  ).toEqualTypeOf<'0x254356112cCf6f32fAd84F16CC5E0A0cCA17Beb7'>()
  expectTypeOf(contracts?.messenger[tempoModerato.id]?.address).toEqualTypeOf<
    `0x${string}` | undefined
  >()
  expectTypeOf(contracts?.portal[tempoModerato.id]?.address).toEqualTypeOf<
    `0x${string}` | undefined
  >()
})

test('exposes Zone protocol addresses', () => {
  expectTypeOf(
    TempoAddresses.zoneFactory,
  ).toEqualTypeOf<'0x5aF2000000000000000000000000000000000000'>()
  expectTypeOf(
    TempoAddresses.zoneMessenger,
  ).toEqualTypeOf<'0x5A4d000000000000000000000000000000000000'>()
  expectTypeOf(
    TempoAddresses.zonePortalImplementation,
  ).toEqualTypeOf<'0x5AD1000000000000000000000000000000000000'>()
  expectTypeOf(
    TempoAddresses.zoneVerifier,
  ).toEqualTypeOf<'0x5a56000000000000000000000000000000000000'>()
})
